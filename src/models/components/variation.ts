/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Variation = {
  /**
   * The ID of the variation. Leave empty when you are creating a flag.
   */
  id?: string | undefined;
  /**
   * The value of the variation. For boolean flags, this must be <code>true</code> or <code>false</code>. For multivariate flags, this may be a string, number, or JSON object.
   */
  value?: any | undefined;
  /**
   * Description of the variation. Defaults to an empty string, but is omitted from the response if not set.
   */
  description?: string | undefined;
  /**
   * A human-friendly name for the variation. Defaults to an empty string, but is omitted from the response if not set.
   */
  name?: string | undefined;
};

/** @internal */
export const Variation$inboundSchema: z.ZodType<
  Variation,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().optional(),
  value: z.any().optional(),
  description: z.string().optional(),
  name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
  });
});

/** @internal */
export type Variation$Outbound = {
  _id?: string | undefined;
  value?: any | undefined;
  description?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const Variation$outboundSchema: z.ZodType<
  Variation$Outbound,
  z.ZodTypeDef,
  Variation
> = z.object({
  id: z.string().optional(),
  value: z.any().optional(),
  description: z.string().optional(),
  name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Variation$ {
  /** @deprecated use `Variation$inboundSchema` instead. */
  export const inboundSchema = Variation$inboundSchema;
  /** @deprecated use `Variation$outboundSchema` instead. */
  export const outboundSchema = Variation$outboundSchema;
  /** @deprecated use `Variation$Outbound` instead. */
  export type Outbound = Variation$Outbound;
}

export function variationToJSON(variation: Variation): string {
  return JSON.stringify(Variation$outboundSchema.parse(variation));
}

export function variationFromJSON(
  jsonString: string,
): SafeParseResult<Variation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Variation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Variation' from JSON`,
  );
}
