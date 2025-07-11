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
export const PostAIConfigVariationLDAPIVersion = {
  Beta: "beta",
} as const;
/**
 * Version of the endpoint.
 */
export type PostAIConfigVariationLDAPIVersion = ClosedEnum<
  typeof PostAIConfigVariationLDAPIVersion
>;

export type PostAIConfigVariationRequest = {
  /**
   * Version of the endpoint.
   */
  ldAPIVersion: PostAIConfigVariationLDAPIVersion;
  projectKey: string;
  configKey: string;
  /**
   * AI Config variation object to create
   */
  aiConfigVariationPost: components.AIConfigVariationPost;
};

/** @internal */
export const PostAIConfigVariationLDAPIVersion$inboundSchema: z.ZodNativeEnum<
  typeof PostAIConfigVariationLDAPIVersion
> = z.nativeEnum(PostAIConfigVariationLDAPIVersion);

/** @internal */
export const PostAIConfigVariationLDAPIVersion$outboundSchema: z.ZodNativeEnum<
  typeof PostAIConfigVariationLDAPIVersion
> = PostAIConfigVariationLDAPIVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostAIConfigVariationLDAPIVersion$ {
  /** @deprecated use `PostAIConfigVariationLDAPIVersion$inboundSchema` instead. */
  export const inboundSchema = PostAIConfigVariationLDAPIVersion$inboundSchema;
  /** @deprecated use `PostAIConfigVariationLDAPIVersion$outboundSchema` instead. */
  export const outboundSchema =
    PostAIConfigVariationLDAPIVersion$outboundSchema;
}

/** @internal */
export const PostAIConfigVariationRequest$inboundSchema: z.ZodType<
  PostAIConfigVariationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "LD-API-Version": PostAIConfigVariationLDAPIVersion$inboundSchema,
  projectKey: z.string(),
  configKey: z.string(),
  AIConfigVariationPost: components.AIConfigVariationPost$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "LD-API-Version": "ldAPIVersion",
    "AIConfigVariationPost": "aiConfigVariationPost",
  });
});

/** @internal */
export type PostAIConfigVariationRequest$Outbound = {
  "LD-API-Version": string;
  projectKey: string;
  configKey: string;
  AIConfigVariationPost: components.AIConfigVariationPost$Outbound;
};

/** @internal */
export const PostAIConfigVariationRequest$outboundSchema: z.ZodType<
  PostAIConfigVariationRequest$Outbound,
  z.ZodTypeDef,
  PostAIConfigVariationRequest
> = z.object({
  ldAPIVersion: PostAIConfigVariationLDAPIVersion$outboundSchema,
  projectKey: z.string(),
  configKey: z.string(),
  aiConfigVariationPost: components.AIConfigVariationPost$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    ldAPIVersion: "LD-API-Version",
    aiConfigVariationPost: "AIConfigVariationPost",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostAIConfigVariationRequest$ {
  /** @deprecated use `PostAIConfigVariationRequest$inboundSchema` instead. */
  export const inboundSchema = PostAIConfigVariationRequest$inboundSchema;
  /** @deprecated use `PostAIConfigVariationRequest$outboundSchema` instead. */
  export const outboundSchema = PostAIConfigVariationRequest$outboundSchema;
  /** @deprecated use `PostAIConfigVariationRequest$Outbound` instead. */
  export type Outbound = PostAIConfigVariationRequest$Outbound;
}

export function postAIConfigVariationRequestToJSON(
  postAIConfigVariationRequest: PostAIConfigVariationRequest,
): string {
  return JSON.stringify(
    PostAIConfigVariationRequest$outboundSchema.parse(
      postAIConfigVariationRequest,
    ),
  );
}

export function postAIConfigVariationRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostAIConfigVariationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostAIConfigVariationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostAIConfigVariationRequest' from JSON`,
  );
}
