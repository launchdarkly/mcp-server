import type { RequestHandler } from "express";
import { timingSafeEqual } from "node:crypto";

export function isLoopbackHost(host: string): boolean {
  return host === "127.0.0.1" || host === "localhost" || host === "::1";
}

export function assertSafeSSEBind(
  host: string,
  authToken: string | undefined,
): void {
  if (!authToken && !isLoopbackHost(host)) {
    throw new Error(
      `--auth-token is required when the SSE transport listens on a non-loopback host (${host})`,
    );
  }
}

export function requireBearerToken(token: string): RequestHandler {
  const expected = Buffer.from(`Bearer ${token}`);
  return (req, res, next) => {
    const actual = Buffer.from(req.headers.authorization ?? "");
    if (
      actual.length !== expected.length || !timingSafeEqual(actual, expected)
    ) {
      res.status(401).send("Unauthorized");
      return;
    }
    next();
  };
}
