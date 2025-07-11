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
export const PatchAIConfigLDAPIVersion = {
  Beta: "beta",
} as const;
/**
 * Version of the endpoint.
 */
export type PatchAIConfigLDAPIVersion = ClosedEnum<
  typeof PatchAIConfigLDAPIVersion
>;

export type PatchAIConfigRequest = {
  /**
   * Version of the endpoint.
   */
  ldAPIVersion: PatchAIConfigLDAPIVersion;
  projectKey: string;
  configKey: string;
  /**
   * AI Config object to update
   */
  aiConfigPatch?: components.AIConfigPatch | undefined;
};

/** @internal */
export const PatchAIConfigLDAPIVersion$inboundSchema: z.ZodNativeEnum<
  typeof PatchAIConfigLDAPIVersion
> = z.nativeEnum(PatchAIConfigLDAPIVersion);

/** @internal */
export const PatchAIConfigLDAPIVersion$outboundSchema: z.ZodNativeEnum<
  typeof PatchAIConfigLDAPIVersion
> = PatchAIConfigLDAPIVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAIConfigLDAPIVersion$ {
  /** @deprecated use `PatchAIConfigLDAPIVersion$inboundSchema` instead. */
  export const inboundSchema = PatchAIConfigLDAPIVersion$inboundSchema;
  /** @deprecated use `PatchAIConfigLDAPIVersion$outboundSchema` instead. */
  export const outboundSchema = PatchAIConfigLDAPIVersion$outboundSchema;
}

/** @internal */
export const PatchAIConfigRequest$inboundSchema: z.ZodType<
  PatchAIConfigRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "LD-API-Version": PatchAIConfigLDAPIVersion$inboundSchema,
  projectKey: z.string(),
  configKey: z.string(),
  AIConfigPatch: components.AIConfigPatch$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "LD-API-Version": "ldAPIVersion",
    "AIConfigPatch": "aiConfigPatch",
  });
});

/** @internal */
export type PatchAIConfigRequest$Outbound = {
  "LD-API-Version": string;
  projectKey: string;
  configKey: string;
  AIConfigPatch?: components.AIConfigPatch$Outbound | undefined;
};

/** @internal */
export const PatchAIConfigRequest$outboundSchema: z.ZodType<
  PatchAIConfigRequest$Outbound,
  z.ZodTypeDef,
  PatchAIConfigRequest
> = z.object({
  ldAPIVersion: PatchAIConfigLDAPIVersion$outboundSchema,
  projectKey: z.string(),
  configKey: z.string(),
  aiConfigPatch: components.AIConfigPatch$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    ldAPIVersion: "LD-API-Version",
    aiConfigPatch: "AIConfigPatch",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAIConfigRequest$ {
  /** @deprecated use `PatchAIConfigRequest$inboundSchema` instead. */
  export const inboundSchema = PatchAIConfigRequest$inboundSchema;
  /** @deprecated use `PatchAIConfigRequest$outboundSchema` instead. */
  export const outboundSchema = PatchAIConfigRequest$outboundSchema;
  /** @deprecated use `PatchAIConfigRequest$Outbound` instead. */
  export type Outbound = PatchAIConfigRequest$Outbound;
}

export function patchAIConfigRequestToJSON(
  patchAIConfigRequest: PatchAIConfigRequest,
): string {
  return JSON.stringify(
    PatchAIConfigRequest$outboundSchema.parse(patchAIConfigRequest),
  );
}

export function patchAIConfigRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchAIConfigRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchAIConfigRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchAIConfigRequest' from JSON`,
  );
}
