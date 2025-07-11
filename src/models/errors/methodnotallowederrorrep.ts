/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { LaunchDarklyError } from "./launchdarklyerror.js";

export type MethodNotAllowedErrorRepData = {
  /**
   * Specific error code encountered
   */
  code: string;
  /**
   * Description of the error
   */
  message: string;
};

export class MethodNotAllowedErrorRep extends LaunchDarklyError {
  /**
   * Specific error code encountered
   */
  code: string;

  /** The original data that was passed to this error instance. */
  data$: MethodNotAllowedErrorRepData;

  constructor(
    err: MethodNotAllowedErrorRepData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;

    this.name = "MethodNotAllowedErrorRep";
  }
}

/** @internal */
export const MethodNotAllowedErrorRep$inboundSchema: z.ZodType<
  MethodNotAllowedErrorRep,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  message: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new MethodNotAllowedErrorRep(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type MethodNotAllowedErrorRep$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const MethodNotAllowedErrorRep$outboundSchema: z.ZodType<
  MethodNotAllowedErrorRep$Outbound,
  z.ZodTypeDef,
  MethodNotAllowedErrorRep
> = z.instanceof(MethodNotAllowedErrorRep)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.string(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MethodNotAllowedErrorRep$ {
  /** @deprecated use `MethodNotAllowedErrorRep$inboundSchema` instead. */
  export const inboundSchema = MethodNotAllowedErrorRep$inboundSchema;
  /** @deprecated use `MethodNotAllowedErrorRep$outboundSchema` instead. */
  export const outboundSchema = MethodNotAllowedErrorRep$outboundSchema;
  /** @deprecated use `MethodNotAllowedErrorRep$Outbound` instead. */
  export type Outbound = MethodNotAllowedErrorRep$Outbound;
}
