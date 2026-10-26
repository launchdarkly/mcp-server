import { createHash, X509Certificate } from "node:crypto";
import tls from "node:tls";

/*
 * INC-289: rejects TLS chains that go through the compromised eMudhra
 * intermediates (https://emudhra.we-have-a-problem.com/). Go 1.26.10, Node.js
 * 22.23.4 / 24.22.1 / 26.12.1 and Bun (unreleased, oven-sh/bun#46300) block
 * the same keys natively. This check covers runtimes that predate those fixes.
 * It is installed only by the `mcp start` CLI, never for library consumers.
 */

/**
 * SHA-256 of the DER SubjectPublicKeyInfo of each compromised intermediate.
 * Identical to Node.js's kBlockedSPKIs (nodejs/node#66871) and Go's fix
 * (CVE-2026-111943). Each key was issued twice, under emSign Root TLS/CS CA -
 * G3 and under Sectigo's AAA Certificate Services, so hashing the key rather
 * than the certificate covers both.
 */
export const BLOCKED_SPKI_SHA256: ReadonlySet<string> = new Set([
  "43bffa19d6ef651451f6841e019931e96f6f2eaeff28ab4b6f1ce4576de2717b",
  "49dd353dc2b919a3770645117d0e60c16115e7d1bc259eefe734b00ea434fe5f",
  "5c0660a2b164910d8ff589c18e14552e9e0ec237dcefe2cb736d41a4811f81a0",
  "63ecefee431d49523bc1136c4e72d0206a477086caf606cd5cf025686c109cf8",
  "92c063d67e8f14db71d288e11266ffdaf69cbf115f7bab14f3bc2f68d25e0e30",
  "e0254c7fcdc265e2f0f8a428dabb75ab4ae039b4872d62f5ee57f0877d5a8a41",
  "ebed6475c2c2d80fcb199f3fe8dd6e6b3ce60b77eb15d4e42c3dec0c6f5b5105",
  "ec4ffa1ad0ac88081314b7aaffef6a91f97cd57291bb5ba686c5415f5eb4f6b6",
]);

/**
 * Common names of the compromised intermediates. Every one of them has
 * pathlen:0, so any leaf signed with one of their keys must name the
 * intermediate as its issuer. Bun's fetch only exposes the leaf to
 * checkServerIdentity, so the issuer name is what blocks these chains there.
 */
const BLOCKED_ISSUER_CN = /^em (dv|ov|ev) (tls|cs) ca - g3[bc]$/;

/**
 * Node.js releases that block these keys natively, by major version. Lines
 * newer than the highest entry are treated as patched; any other line is
 * treated as unpatched.
 */
const FIXED_NODE_VERSIONS: Readonly<
  Record<number, readonly [number, number, number]>
> = {
  22: [22, 23, 4],
  24: [24, 22, 1],
  26: [26, 12, 1],
};

/**
 * First Bun release that blocks these keys natively. Set this once one ships
 * (the fix is oven-sh/bun#46300). While it is undefined, every Bun version
 * gets the warning.
 */
const FIXED_BUN_VERSION: string | undefined = undefined;

export const BLOCKED_CERT_ERROR_CODE = "ERR_TLS_CERT_BLOCKED";

/** The subset of tls.PeerCertificate this check reads. */
export interface PeerCertificateLike {
  raw?: Uint8Array | undefined;
  fingerprint256?: string | undefined;
  issuer?: { CN?: string | string[] | undefined } | undefined;
  issuerCertificate?: PeerCertificateLike | undefined;
}

type CheckServerIdentity = (
  hostname: string,
  cert: tls.PeerCertificate,
) => Error | undefined;

// Captured before installTlsBlocklist() replaces tls.checkServerIdentity.
const defaultCheckServerIdentity: CheckServerIdentity = tls.checkServerIdentity;

function normalizeName(value: string): string {
  return value.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim();
}

export function isBlockedIssuerName(
  cn: string | string[] | undefined,
): boolean {
  const names = Array.isArray(cn) ? cn : cn === undefined ? [] : [cn];
  return names.some((name) => BLOCKED_ISSUER_CN.test(normalizeName(name)));
}

export function spkiSha256(raw: Uint8Array): string {
  const spki = new X509Certificate(raw).publicKey.export({
    type: "spki",
    format: "der",
  });
  return createHash("sha256").update(spki).digest("hex");
}

/**
 * Walks the peer chain (the full chain on Node.js, the leaf only on Bun) and
 * returns a description of the first blocked certificate, if any.
 */
export function findBlockedCertificate(
  cert: PeerCertificateLike,
): string | undefined {
  const seen = new Set<PeerCertificateLike>();
  for (
    let current: PeerCertificateLike | undefined = cert;
    current && !seen.has(current);
    current = current.issuerCertificate
  ) {
    seen.add(current);
    if (isBlockedIssuerName(current.issuer?.CN)) {
      return `certificate issued by "${String(current.issuer?.CN)}"`;
    }
    if (current.raw && current.raw.length > 0) {
      const hash = spkiSha256(current.raw);
      if (BLOCKED_SPKI_SHA256.has(hash)) {
        return `certificate with blocked public key sha256/${hash}`;
      }
    }
  }
  return undefined;
}

/**
 * A tls checkServerIdentity replacement: rejects blocked chains, then runs
 * the runtime's normal hostname verification.
 */
export function checkServerIdentity(
  hostname: string,
  cert: PeerCertificateLike,
): Error | undefined {
  let blocked: string | undefined;
  try {
    blocked = findBlockedCertificate(cert);
  } catch (err) {
    blocked = `certificate that could not be parsed (${String(err)})`;
  }
  if (blocked) {
    return Object.assign(
      new Error(
        `Refusing TLS connection to ${hostname}: the chain contains a ${blocked}, ` +
          "which belongs to a compromised eMudhra intermediate CA.",
      ),
      { code: BLOCKED_CERT_ERROR_CODE },
    );
  }
  return defaultCheckServerIdentity(
    hostname,
    cert as unknown as tls.PeerCertificate,
  );
}

let installed = false;

/**
 * Installs the blocklist for this process. On Node.js, global fetch (undici)
 * and node:https read tls.checkServerIdentity when they connect. Bun's fetch
 * ignores it, so on Bun global fetch is wrapped to pass the check through
 * Bun's `tls` fetch option.
 */
export function installTlsBlocklist(): void {
  if (installed) return;
  installed = true;

  if (isBun()) {
    const originalFetch = globalThis.fetch;
    const wrapped = (
      input: Parameters<typeof fetch>[0],
      init?: Parameters<typeof fetch>[1],
    ): ReturnType<typeof fetch> => {
      const tlsOptions = (
        init as
          { tls?: { checkServerIdentity?: CheckServerIdentity } } | undefined
      )?.tls;
      const callerCheck = tlsOptions?.checkServerIdentity;
      const combined: CheckServerIdentity = callerCheck
        ? (hostname, cert) =>
            checkServerIdentity(hostname, cert) ?? callerCheck(hostname, cert)
        : (checkServerIdentity as unknown as CheckServerIdentity);
      return originalFetch(input, {
        ...init,
        tls: { ...tlsOptions, checkServerIdentity: combined },
      } as RequestInit);
    };
    globalThis.fetch = Object.assign(wrapped, originalFetch);
  } else {
    tls.checkServerIdentity =
      checkServerIdentity as unknown as CheckServerIdentity;
  }
}

function isBun(): boolean {
  return typeof (globalThis as { Bun?: unknown }).Bun !== "undefined";
}

function parseVersion(version: string): [number, number, number] | undefined {
  const match = /^v?(\d+)\.(\d+)\.(\d+)/.exec(version);
  if (!match) return undefined;
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

function compareVersions(
  a: readonly [number, number, number],
  b: readonly [number, number, number],
): number {
  return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
}

export function isNodeVersionPatched(version: string): boolean {
  const parsed = parseVersion(version);
  if (!parsed) return false;
  const fixed = FIXED_NODE_VERSIONS[parsed[0]];
  if (fixed) return compareVersions(parsed, fixed) >= 0;
  const newestLine = Math.max(...Object.keys(FIXED_NODE_VERSIONS).map(Number));
  return parsed[0] > newestLine;
}

export function isBunVersionPatched(version: string): boolean {
  if (FIXED_BUN_VERSION === undefined) return false;
  const parsed = parseVersion(version);
  const fixed = parseVersion(FIXED_BUN_VERSION);
  return !!parsed && !!fixed && compareVersions(parsed, fixed) >= 0;
}

/**
 * Returns a warning when the current runtime does not block the compromised
 * eMudhra intermediates natively, or undefined when it does.
 */
export function unpatchedRuntimeWarning(
  versions: {
    node?: string | undefined;
    bun?: string | undefined;
  } = process.versions,
): string | undefined {
  let runtime: string;
  let upgrade: string;
  if (versions.bun !== undefined) {
    if (isBunVersionPatched(versions.bun)) return undefined;
    runtime = `Bun ${versions.bun}`;
    upgrade =
      "run the server with Node.js 22.23.4, 24.22.1, 26.12.1 or later, or use the Docker image";
  } else if (versions.node !== undefined) {
    if (isNodeVersionPatched(versions.node)) return undefined;
    runtime = `Node.js ${versions.node}`;
    upgrade = "upgrade to Node.js 22.23.4, 24.22.1, 26.12.1 or later";
  } else {
    return undefined;
  }
  return (
    `WARNING: ${runtime} does not block the compromised eMudhra intermediate CAs. ` +
    "The LaunchDarkly MCP server rejects them for its own requests, but the runtime does not; " +
    `${upgrade}. See https://github.com/launchdarkly/mcp-server#runtime-requirements\n`
  );
}
