/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AIConfigTargetingEnvironmentTarget = {
  contextKind: string;
  values: Array<string>;
  variation: number;
};

/** @internal */
export const AIConfigTargetingEnvironmentTarget$inboundSchema: z.ZodType<
  AIConfigTargetingEnvironmentTarget,
  z.ZodTypeDef,
  unknown
> = z.object({
  contextKind: z.string(),
  values: z.array(z.string()),
  variation: z.number().int(),
});

/** @internal */
export type AIConfigTargetingEnvironmentTarget$Outbound = {
  contextKind: string;
  values: Array<string>;
  variation: number;
};

/** @internal */
export const AIConfigTargetingEnvironmentTarget$outboundSchema: z.ZodType<
  AIConfigTargetingEnvironmentTarget$Outbound,
  z.ZodTypeDef,
  AIConfigTargetingEnvironmentTarget
> = z.object({
  contextKind: z.string(),
  values: z.array(z.string()),
  variation: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AIConfigTargetingEnvironmentTarget$ {
  /** @deprecated use `AIConfigTargetingEnvironmentTarget$inboundSchema` instead. */
  export const inboundSchema = AIConfigTargetingEnvironmentTarget$inboundSchema;
  /** @deprecated use `AIConfigTargetingEnvironmentTarget$outboundSchema` instead. */
  export const outboundSchema =
    AIConfigTargetingEnvironmentTarget$outboundSchema;
  /** @deprecated use `AIConfigTargetingEnvironmentTarget$Outbound` instead. */
  export type Outbound = AIConfigTargetingEnvironmentTarget$Outbound;
}

export function aiConfigTargetingEnvironmentTargetToJSON(
  aiConfigTargetingEnvironmentTarget: AIConfigTargetingEnvironmentTarget,
): string {
  return JSON.stringify(
    AIConfigTargetingEnvironmentTarget$outboundSchema.parse(
      aiConfigTargetingEnvironmentTarget,
    ),
  );
}

export function aiConfigTargetingEnvironmentTargetFromJSON(
  jsonString: string,
): SafeParseResult<AIConfigTargetingEnvironmentTarget, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AIConfigTargetingEnvironmentTarget$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AIConfigTargetingEnvironmentTarget' from JSON`,
  );
}
