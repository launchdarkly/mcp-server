/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation,
  AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation$inboundSchema,
  AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation$Outbound,
  AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation$outboundSchema,
} from "./aiconfigtargetingenvironmentfallthroughrolloutexperimentationallocation.js";
import {
  AIConfigTargetingEnvironmentFallthroughRolloutVariation,
  AIConfigTargetingEnvironmentFallthroughRolloutVariation$inboundSchema,
  AIConfigTargetingEnvironmentFallthroughRolloutVariation$Outbound,
  AIConfigTargetingEnvironmentFallthroughRolloutVariation$outboundSchema,
} from "./aiconfigtargetingenvironmentfallthroughrolloutvariation.js";

export type AIConfigTargetingEnvironmentFallthroughRollout = {
  bucketBy?: string | undefined;
  contextKind: string;
  experimentAllocation?:
    | AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation
    | undefined;
  seed?: number | undefined;
  variations: Array<AIConfigTargetingEnvironmentFallthroughRolloutVariation>;
};

/** @internal */
export const AIConfigTargetingEnvironmentFallthroughRollout$inboundSchema:
  z.ZodType<
    AIConfigTargetingEnvironmentFallthroughRollout,
    z.ZodTypeDef,
    unknown
  > = z.object({
    bucketBy: z.string().optional(),
    contextKind: z.string(),
    experimentAllocation:
      AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation$inboundSchema
        .optional(),
    seed: z.number().int().optional(),
    variations: z.array(
      AIConfigTargetingEnvironmentFallthroughRolloutVariation$inboundSchema,
    ),
  });

/** @internal */
export type AIConfigTargetingEnvironmentFallthroughRollout$Outbound = {
  bucketBy?: string | undefined;
  contextKind: string;
  experimentAllocation?:
    | AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation$Outbound
    | undefined;
  seed?: number | undefined;
  variations: Array<
    AIConfigTargetingEnvironmentFallthroughRolloutVariation$Outbound
  >;
};

/** @internal */
export const AIConfigTargetingEnvironmentFallthroughRollout$outboundSchema:
  z.ZodType<
    AIConfigTargetingEnvironmentFallthroughRollout$Outbound,
    z.ZodTypeDef,
    AIConfigTargetingEnvironmentFallthroughRollout
  > = z.object({
    bucketBy: z.string().optional(),
    contextKind: z.string(),
    experimentAllocation:
      AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation$outboundSchema
        .optional(),
    seed: z.number().int().optional(),
    variations: z.array(
      AIConfigTargetingEnvironmentFallthroughRolloutVariation$outboundSchema,
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AIConfigTargetingEnvironmentFallthroughRollout$ {
  /** @deprecated use `AIConfigTargetingEnvironmentFallthroughRollout$inboundSchema` instead. */
  export const inboundSchema =
    AIConfigTargetingEnvironmentFallthroughRollout$inboundSchema;
  /** @deprecated use `AIConfigTargetingEnvironmentFallthroughRollout$outboundSchema` instead. */
  export const outboundSchema =
    AIConfigTargetingEnvironmentFallthroughRollout$outboundSchema;
  /** @deprecated use `AIConfigTargetingEnvironmentFallthroughRollout$Outbound` instead. */
  export type Outbound =
    AIConfigTargetingEnvironmentFallthroughRollout$Outbound;
}

export function aiConfigTargetingEnvironmentFallthroughRolloutToJSON(
  aiConfigTargetingEnvironmentFallthroughRollout:
    AIConfigTargetingEnvironmentFallthroughRollout,
): string {
  return JSON.stringify(
    AIConfigTargetingEnvironmentFallthroughRollout$outboundSchema.parse(
      aiConfigTargetingEnvironmentFallthroughRollout,
    ),
  );
}

export function aiConfigTargetingEnvironmentFallthroughRolloutFromJSON(
  jsonString: string,
): SafeParseResult<
  AIConfigTargetingEnvironmentFallthroughRollout,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AIConfigTargetingEnvironmentFallthroughRollout$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AIConfigTargetingEnvironmentFallthroughRollout' from JSON`,
  );
}
