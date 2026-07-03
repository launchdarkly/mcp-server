import * as z from "zod/v3";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCodeRefStatisticsRequest = {
  /**
   * The LaunchDarkly project key
   */
  projectKey: string;
  /**
   * Filter results to a specific flag key
   */
  flagKey?: string | undefined;
};

/** @internal */
export const GetCodeRefStatisticsRequest$inboundSchema: z.ZodType<
  GetCodeRefStatisticsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectKey: z.string(),
  flagKey: z.string().optional(),
});

/** @internal */
export type GetCodeRefStatisticsRequest$Outbound = {
  projectKey: string;
  flagKey?: string | undefined;
};

/** @internal */
export const GetCodeRefStatisticsRequest$outboundSchema: z.ZodType<
  GetCodeRefStatisticsRequest$Outbound,
  z.ZodTypeDef,
  GetCodeRefStatisticsRequest
> = z.object({
  projectKey: z.string(),
  flagKey: z.string().optional(),
});

export function getCodeRefStatisticsRequestToJSON(
  req: GetCodeRefStatisticsRequest,
): string {
  return JSON.stringify(
    GetCodeRefStatisticsRequest$outboundSchema.parse(req),
  );
}

export function getCodeRefStatisticsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCodeRefStatisticsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCodeRefStatisticsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCodeRefStatisticsRequest' from JSON`,
  );
}
