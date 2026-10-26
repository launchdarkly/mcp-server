import assert from "node:assert/strict";
import { execFile, execFileSync, spawnSync } from "node:child_process";
import { X509Certificate } from "node:crypto";
import fs from "node:fs";
import https from "node:https";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import tls from "node:tls";
import { after, before, describe, test } from "node:test";
import { fileURLToPath } from "node:url";
import {
  BLOCKED_CERT_ERROR_CODE,
  BLOCKED_SPKI_SHA256,
  checkServerIdentity,
  isNodeVersionPatched,
  spkiSha256,
  unpatchedRuntimeWarning,
} from "../dist/esm/mcp-server/cli/start/tls-blocklist.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const blocklistModule = path.join(
  here,
  "../dist/esm/mcp-server/cli/start/tls-blocklist.js",
);
// From https://emudhra.we-have-a-problem.com/impacted-intermediates.json
const impacted = JSON.parse(
  fs.readFileSync(
    path.join(here, "fixtures/emudhra-impacted-intermediates.json"),
    "utf8",
  ),
);
// app.launchdarkly.com leaf + GlobalSign Atlas intermediate, captured 2026-10-21.
const ldChainPems = fs
  .readFileSync(
    path.join(here, "fixtures/app-launchdarkly-com-chain.pem"),
    "utf8",
  )
  .match(/-----BEGIN CERTIFICATE-----[\s\S]+?-----END CERTIFICATE-----/g);

/** Builds a tls.PeerCertificate-shaped chain (leaf first) from PEMs. */
function peerChain(pems) {
  const certs = pems.map((pem) => {
    const x = new X509Certificate(pem);
    const name = (dn) =>
      Object.fromEntries(
        dn.split("\n").map((l) => l.split(/=(.*)/s).slice(0, 2)),
      );
    return {
      raw: x.raw,
      fingerprint256: x.fingerprint256,
      subject: name(x.subject),
      issuer: name(x.issuer),
      subjectaltname: x.subjectAltName,
    };
  });
  certs.forEach((c, i) => {
    c.issuerCertificate = certs[i + 1] ?? c;
  });
  return certs[0];
}

const globalSignR3 = tls.rootCertificates.find((pem) =>
  new X509Certificate(pem).subject.includes("OU=GlobalSign Root CA - R3"),
);

test("the fixture covers 16 certificates over the 8 blocked keys", () => {
  assert.equal(impacted.length, 16);
  assert.deepEqual(
    new Set(impacted.map((c) => c.spki_sha256.toLowerCase())),
    BLOCKED_SPKI_SHA256,
  );
});

describe("checkServerIdentity", () => {
  for (const cert of impacted) {
    const label = `${cert.name} (issued by ${cert.issued_by})`;

    test(`blocks ${label} as a chain element`, () => {
      assert.equal(
        spkiSha256(new X509Certificate(cert.pem).raw),
        cert.spki_sha256.toLowerCase(),
      );
      // A leaf whose issuer name is benign, so only the key hash can catch it.
      const chain = peerChain([ldChainPems[0], cert.pem, globalSignR3]);
      chain.issuer = { CN: "Some Other CA" };
      const err = checkServerIdentity("app.launchdarkly.com", chain);
      assert.ok(err instanceof Error);
      assert.equal(err.code, BLOCKED_CERT_ERROR_CODE);
      assert.match(err.message, /blocked public key/);
    });

    test(`blocks a leaf issued by ${label} when only the leaf is visible`, () => {
      // Bun's fetch passes only the leaf to checkServerIdentity.
      const leaf = peerChain([ldChainPems[0]]);
      const cn = new X509Certificate(cert.pem).subject.match(/CN=(.*)/)[1];
      leaf.issuer = { C: "NL", O: "eMudhra BV", CN: cn };
      delete leaf.issuerCertificate;
      const err = checkServerIdentity("app.launchdarkly.com", leaf);
      assert.equal(err?.code, BLOCKED_CERT_ERROR_CODE);
      assert.match(err.message, /issued by/);
    });
  }

  test("blocks issuer names regardless of case and spacing", () => {
    const leaf = peerChain([ldChainPems[0]]);
    leaf.issuer = { CN: "  em  dv tls CA - g3B " };
    delete leaf.issuerCertificate;
    assert.equal(
      checkServerIdentity("app.launchdarkly.com", leaf)?.code,
      BLOCKED_CERT_ERROR_CODE,
    );
  });

  test("allows the real app.launchdarkly.com chain", () => {
    assert.ok(globalSignR3, "GlobalSign Root CA - R3 is in the bundled roots");
    const chain = peerChain([...ldChainPems, globalSignR3]);
    assert.equal(checkServerIdentity("app.launchdarkly.com", chain), undefined);
  });

  test("still enforces the hostname", () => {
    const chain = peerChain([...ldChainPems, globalSignR3]);
    const err = checkServerIdentity("evil.example.com", chain);
    assert.equal(err?.code, "ERR_TLS_CERT_ALTNAME_INVALID");
  });
});

describe("unpatchedRuntimeWarning", () => {
  const cases = [
    ["22.23.3", false],
    ["22.23.4", true],
    ["24.2.0", false],
    ["24.22.0", false],
    ["24.22.1", true],
    ["24.23.0", true],
    ["20.19.5", false],
    ["23.11.1", false],
    ["25.9.0", false],
    ["26.12.0", false],
    ["26.12.1", true],
    ["27.0.0", true],
  ];
  for (const [version, patched] of cases) {
    test(`Node.js ${version} is ${patched ? "patched" : "unpatched"}`, () => {
      assert.equal(isNodeVersionPatched(version), patched);
      assert.equal(
        unpatchedRuntimeWarning({ node: version }) === undefined,
        patched,
      );
    });
  }

  test("always warns on Bun until a fixed release is recorded", () => {
    assert.match(
      unpatchedRuntimeWarning({ node: "24.3.0", bun: "1.4.3" }),
      /Bun 1\.4\.3/,
    );
  });
});

// End to end: a real TLS handshake through a chain whose intermediate carries
// a blocked eMudhra name (with our own key, since nobody has the real ones).
const haveOpenSSL = spawnSync("openssl", ["version"]).status === 0;
describe(
  "installTlsBlocklist with global fetch",
  { skip: !haveOpenSSL && "openssl not available" },
  () => {
    let dir;
    const servers = [];
    const urls = {};

    function openssl(...args) {
      execFileSync("openssl", args, { cwd: dir, stdio: "ignore" });
    }

    function issue(name, subject, issuer, ext) {
      openssl(
        "req",
        "-new",
        "-newkey",
        "ec",
        "-pkeyopt",
        "ec_paramgen_curve:P-256",
        "-nodes",
        "-keyout",
        `${name}.key`,
        "-out",
        `${name}.csr`,
        "-subj",
        subject,
      );
      fs.writeFileSync(path.join(dir, `${name}.ext`), ext);
      openssl(
        "x509",
        "-req",
        "-in",
        `${name}.csr`,
        "-CA",
        `${issuer}.pem`,
        "-CAkey",
        `${issuer}.key`,
        "-CAcreateserial",
        "-days",
        "2",
        "-out",
        `${name}.pem`,
        "-extfile",
        `${name}.ext`,
      );
    }

    async function serve(label, intermediate) {
      const read = (f) => fs.readFileSync(path.join(dir, f));
      const server = https.createServer(
        {
          key: read(`${label}-leaf.key`),
          cert: Buffer.concat([
            read(`${label}-leaf.pem`),
            read(`${intermediate}.pem`),
          ]),
        },
        (_req, res) => res.end("ok"),
      );
      await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
      servers.push(server);
      urls[label] = `https://localhost:${server.address().port}/`;
    }

    before(async () => {
      dir = fs.mkdtempSync(path.join(os.tmpdir(), "tls-blocklist-"));
      openssl(
        "req",
        "-x509",
        "-newkey",
        "ec",
        "-pkeyopt",
        "ec_paramgen_curve:P-256",
        "-nodes",
        "-keyout",
        "root.key",
        "-out",
        "root.pem",
        "-days",
        "2",
        "-subj",
        "/CN=Test Root",
        "-addext",
        "basicConstraints=critical,CA:TRUE",
        "-addext",
        "keyUsage=critical,keyCertSign,cRLSign",
      );
      const caExt =
        "basicConstraints=critical,CA:TRUE,pathlen:0\nkeyUsage=critical,keyCertSign,cRLSign\n";
      const leafExt =
        "basicConstraints=critical,CA:FALSE\nsubjectAltName=DNS:localhost\nextendedKeyUsage=serverAuth\n";
      issue(
        "emudhra-int",
        "/C=NL/O=eMudhra BV/CN=EM DV TLS CA - G3B",
        "root",
        caExt,
      );
      issue("benign-int", "/CN=Test Intermediate", "root", caExt);
      issue("emudhra-leaf", "/CN=localhost", "emudhra-int", leafExt);
      issue("benign-leaf", "/CN=localhost", "benign-int", leafExt);
      await serve("emudhra", "emudhra-int");
      await serve("benign", "benign-int");
    });

    after(() => {
      servers.forEach((s) => s.close());
      fs.rmSync(dir, { recursive: true, force: true });
    });

    // Each case runs in a child process so the global patch and the extra CA
    // stay out of this test process.
    function fetchInChild(url, install) {
      const script = `
      const { installTlsBlocklist } = await import(${JSON.stringify(blocklistModule)});
      if (${install}) installTlsBlocklist();
      try { const r = await fetch(${JSON.stringify(url)}); console.log("OK " + r.status); }
      catch (e) { console.log("FAIL " + (e.cause?.code ?? e.code ?? e.message)); }`;
      // Async, so this process can keep serving the handshake.
      return new Promise((resolve, reject) => {
        execFile(
          process.execPath,
          ["--input-type=module", "-e", script],
          {
            env: {
              ...process.env,
              NODE_EXTRA_CA_CERTS: path.join(dir, "root.pem"),
            },
          },
          (err, stdout) => (err ? reject(err) : resolve(stdout.trim())),
        );
      });
    }

    test("rejects a chain through a blocked eMudhra intermediate", async () => {
      assert.equal(
        await fetchInChild(urls.emudhra, false),
        "OK 200",
        "control: the chain is otherwise valid",
      );
      assert.equal(
        await fetchInChild(urls.emudhra, true),
        `FAIL ${BLOCKED_CERT_ERROR_CODE}`,
      );
    });

    test("allows a chain through any other intermediate", async () => {
      assert.equal(await fetchInChild(urls.benign, true), "OK 200");
    });
  },
);
