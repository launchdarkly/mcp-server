import assert from "node:assert/strict";
import process from "node:process";
import { after, before, describe, test } from "node:test";
import express from "express";
import { main } from "../dist/esm/mcp-server/cli/start/impl.js";
import {
  assertSafeSSEBind,
  requireBearerToken,
} from "../dist/esm/mcp-server/cli/start/sse-security.js";

const TOKEN = "0123456789abcdef";

describe("assertSafeSSEBind", () => {
  for (const host of ["0.0.0.0", "::", "192.168.1.10", "example.com"]) {
    test(`refuses ${host} without a token`, () => {
      assert.throws(
        () => assertSafeSSEBind(host, undefined),
        /--auth-token is required/,
      );
    });

    test(`allows ${host} with a token`, () => {
      assert.doesNotThrow(() => assertSafeSSEBind(host, TOKEN));
    });
  }

  for (const host of ["127.0.0.1", "localhost", "::1"]) {
    test(`allows loopback ${host} without a token`, () => {
      assert.doesNotThrow(() => assertSafeSSEBind(host, undefined));
    });
  }
});

test("start --transport sse refuses a non-loopback host without a token", async () => {
  await assert.rejects(
    main.call({ process }, {
      transport: "sse",
      host: "0.0.0.0",
      port: 0,
      "log-level": "error",
    }),
    /--auth-token is required/,
  );
});

describe("requireBearerToken", () => {
  let server;
  let url;

  before(async () => {
    const app = express();
    app.use(requireBearerToken(TOKEN));
    app.get("/", (_req, res) => res.send("ok"));
    await new Promise((resolve) => {
      server = app.listen(0, "127.0.0.1", resolve);
    });
    url = `http://127.0.0.1:${server.address().port}/`;
  });

  after(() => new Promise((resolve) => server.close(resolve)));

  const cases = [
    ["a missing header", undefined],
    ["a wrong token of the same length", "Bearer fedcba9876543210"],
    ["a token prefix", `Bearer ${TOKEN.slice(0, -1)}`],
    ["the token without the Bearer scheme", TOKEN],
  ];
  for (const [name, header] of cases) {
    test(`returns 401 for ${name}`, async () => {
      const res = await fetch(url, {
        headers: header === undefined ? {} : { Authorization: header },
      });
      assert.equal(res.status, 401);
    });
  }

  test("passes the request through for the right token", async () => {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    assert.equal(res.status, 200);
    assert.equal(await res.text(), "ok");
  });
});
