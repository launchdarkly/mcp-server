/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { LaunchDarklyError } from "./launchdarklyerror.js";

export type InvalidRequestErrorRepData = {
  /**
   * Specific error code encountered
   */
  code: string;
  /**
   * Description of the error
   */
  message: string;
};

export class InvalidRequestErrorRep extends LaunchDarklyError {
  /**
   * Specific error code encountered
   */
  code: string;

  /** The original data that was passed to this error instance. */
  data$: InvalidRequestErrorRepData;

  constructor(
    err: InvalidRequestErrorRepData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;

    this.name = "InvalidRequestErrorRep";
  }
}

/** @internal */
export const InvalidRequestErrorRep$inboundSchema: z.ZodType<
  InvalidRequestErrorRep,
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
    return new InvalidRequestErrorRep(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type InvalidRequestErrorRep$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const InvalidRequestErrorRep$outboundSchema: z.ZodType<
  InvalidRequestErrorRep$Outbound,
  z.ZodTypeDef,
  InvalidRequestErrorRep
> = z.instanceof(InvalidRequestErrorRep)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.string(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidRequestErrorRep$ {
  /** @deprecated use `InvalidRequestErrorRep$inboundSchema` instead. */
  export const inboundSchema = InvalidRequestErrorRep$inboundSchema;
  /** @deprecated use `InvalidRequestErrorRep$outboundSchema` instead. */
  export const outboundSchema = InvalidRequestErrorRep$outboundSchema;
  /** @deprecated use `InvalidRequestErrorRep$Outbound` instead. */
  export type Outbound = InvalidRequestErrorRep$Outbound;
}
