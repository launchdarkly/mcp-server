/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Version of the endpoint.
 */
export const PatchAIConfigTargetingLDAPIVersion = {
  Beta: "beta",
} as const;
/**
 * Version of the endpoint.
 */
export type PatchAIConfigTargetingLDAPIVersion = ClosedEnum<
  typeof PatchAIConfigTargetingLDAPIVersion
>;

export type PatchAIConfigTargetingRequest = {
  /**
   * Version of the endpoint.
   */
  ldAPIVersion: PatchAIConfigTargetingLDAPIVersion;
  projectKey: string;
  configKey: string;
  /**
   * AI Config targeting semantic patch instructions
   */
  aiConfigTargetingPatch?: components.AIConfigTargetingPatch | undefined;
};

/** @internal */
export const PatchAIConfigTargetingLDAPIVersion$inboundSchema: z.ZodNativeEnum<
  typeof PatchAIConfigTargetingLDAPIVersion
> = z.nativeEnum(PatchAIConfigTargetingLDAPIVersion);

/** @internal */
export const PatchAIConfigTargetingLDAPIVersion$outboundSchema: z.ZodNativeEnum<
  typeof PatchAIConfigTargetingLDAPIVersion
> = PatchAIConfigTargetingLDAPIVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAIConfigTargetingLDAPIVersion$ {
  /** @deprecated use `PatchAIConfigTargetingLDAPIVersion$inboundSchema` instead. */
  export const inboundSchema = PatchAIConfigTargetingLDAPIVersion$inboundSchema;
  /** @deprecated use `PatchAIConfigTargetingLDAPIVersion$outboundSchema` instead. */
  export const outboundSchema =
    PatchAIConfigTargetingLDAPIVersion$outboundSchema;
}

/** @internal */
export const PatchAIConfigTargetingRequest$inboundSchema: z.ZodType<
  PatchAIConfigTargetingRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "LD-API-Version": PatchAIConfigTargetingLDAPIVersion$inboundSchema,
  projectKey: z.string(),
  configKey: z.string(),
  AIConfigTargetingPatch: components.AIConfigTargetingPatch$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "LD-API-Version": "ldAPIVersion",
    "AIConfigTargetingPatch": "aiConfigTargetingPatch",
  });
});

/** @internal */
export type PatchAIConfigTargetingRequest$Outbound = {
  "LD-API-Version": string;
  projectKey: string;
  configKey: string;
  AIConfigTargetingPatch?:
    | components.AIConfigTargetingPatch$Outbound
    | undefined;
};

/** @internal */
export const PatchAIConfigTargetingRequest$outboundSchema: z.ZodType<
  PatchAIConfigTargetingRequest$Outbound,
  z.ZodTypeDef,
  PatchAIConfigTargetingRequest
> = z.object({
  ldAPIVersion: PatchAIConfigTargetingLDAPIVersion$outboundSchema,
  projectKey: z.string(),
  configKey: z.string(),
  aiConfigTargetingPatch: components.AIConfigTargetingPatch$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    ldAPIVersion: "LD-API-Version",
    aiConfigTargetingPatch: "AIConfigTargetingPatch",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAIConfigTargetingRequest$ {
  /** @deprecated use `PatchAIConfigTargetingRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAIConfigTargetingRequest$inboundSchema;
  /** @deprecated use `PatchAIConfigTargetingRequest$outboundSchema` instead. */
  export const outboundSchema = PatchAIConfigTargetingRequest$outboundSchema;
  /** @deprecated use `PatchAIConfigTargetingRequest$Outbound` instead. */
  export type Outbound = PatchAIConfigTargetingRequest$Outbound;
}

export function patchAIConfigTargetingRequestToJSON(
  patchAIConfigTargetingRequest: PatchAIConfigTargetingRequest,
): string {
  return JSON.stringify(
    PatchAIConfigTargetingRequest$outboundSchema.parse(
      patchAIConfigTargetingRequest,
    ),
  );
}

export function patchAIConfigTargetingRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchAIConfigTargetingRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchAIConfigTargetingRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchAIConfigTargetingRequest' from JSON`,
  );
}
