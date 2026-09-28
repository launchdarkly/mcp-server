import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

export const API_VERSION_HEADER = "LD-API-Version";
export const API_VERSION = "20240415";

/*
 * Pins every REST request to a single LaunchDarkly API version so responses
 * don't depend on the default version stored on the caller's access token.
 * A request that already sets the header (for example, "beta") keeps its value.
 */
export class APIVersionHook implements BeforeRequestHook {
  beforeRequest(_hookCtx: BeforeRequestContext, request: Request): Request {
    if (!request.headers.has(API_VERSION_HEADER)) {
      request.headers.set(API_VERSION_HEADER, API_VERSION);
    }
    return request;
  }
}
