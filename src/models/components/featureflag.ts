/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ClientSideAvailability,
  ClientSideAvailability$inboundSchema,
  ClientSideAvailability$Outbound,
  ClientSideAvailability$outboundSchema,
} from "./clientsideavailability.js";
import {
  CustomProperty,
  CustomProperty$inboundSchema,
  CustomProperty$Outbound,
  CustomProperty$outboundSchema,
} from "./customproperty.js";
import {
  Defaults,
  Defaults$inboundSchema,
  Defaults$Outbound,
  Defaults$outboundSchema,
} from "./defaults.js";
import {
  ExperimentInfoRep,
  ExperimentInfoRep$inboundSchema,
  ExperimentInfoRep$Outbound,
  ExperimentInfoRep$outboundSchema,
} from "./experimentinforep.js";
import {
  FeatureFlagConfig,
  FeatureFlagConfig$inboundSchema,
  FeatureFlagConfig$Outbound,
  FeatureFlagConfig$outboundSchema,
} from "./featureflagconfig.js";
import {
  FlagMigrationSettingsRep,
  FlagMigrationSettingsRep$inboundSchema,
  FlagMigrationSettingsRep$Outbound,
  FlagMigrationSettingsRep$outboundSchema,
} from "./flagmigrationsettingsrep.js";
import {
  Link,
  Link$inboundSchema,
  Link$Outbound,
  Link$outboundSchema,
} from "./link.js";
import {
  MaintainerTeam,
  MaintainerTeam$inboundSchema,
  MaintainerTeam$Outbound,
  MaintainerTeam$outboundSchema,
} from "./maintainerteam.js";
import {
  MemberSummary,
  MemberSummary$inboundSchema,
  MemberSummary$Outbound,
  MemberSummary$outboundSchema,
} from "./membersummary.js";
import {
  Variation,
  Variation$inboundSchema,
  Variation$Outbound,
  Variation$outboundSchema,
} from "./variation.js";

/**
 * Kind of feature flag
 */
export const FeatureFlagKind = {
  Boolean: "boolean",
  Multivariate: "multivariate",
} as const;
/**
 * Kind of feature flag
 */
export type FeatureFlagKind = ClosedEnum<typeof FeatureFlagKind>;

export type FeatureFlag = {
  /**
   * A human-friendly name for the feature flag
   */
  name: string;
  /**
   * Kind of feature flag
   */
  kind: FeatureFlagKind;
  /**
   * Description of the feature flag
   */
  description?: string | undefined;
  /**
   * A unique key used to reference the flag in your code
   */
  key: string;
  /**
   * Version of the feature flag
   */
  version: number;
  creationDate: number;
  /**
   * Deprecated, use <code>clientSideAvailability</code>. Whether this flag should be made available to the client-side JavaScript SDK
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  includeInSnippet?: boolean | undefined;
  clientSideAvailability?: ClientSideAvailability | undefined;
  /**
   * An array of possible variations for the flag
   */
  variations: Array<Variation>;
  /**
   * Whether the flag is a temporary flag
   */
  temporary: boolean;
  /**
   * Tags for the feature flag
   */
  tags: Array<string>;
  /**
   * The location and content type of related resources
   */
  links: { [k: string]: Link };
  /**
   * Associated maintainerId for the feature flag
   */
  maintainerId?: string | undefined;
  maintainer?: MemberSummary | undefined;
  /**
   * The key of the associated team that maintains this feature flag
   */
  maintainerTeamKey?: string | undefined;
  maintainerTeam?: MaintainerTeam | undefined;
  /**
   * Deprecated, use <code>experiments</code> instead
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  goalIds?: Array<string> | undefined;
  experiments: ExperimentInfoRep;
  customProperties: { [k: string]: CustomProperty };
  /**
   * Boolean indicating if the feature flag is archived
   */
  archived: boolean;
  archivedDate?: number | undefined;
  /**
   * Boolean indicating if the feature flag is deprecated
   */
  deprecated?: boolean | undefined;
  deprecatedDate?: number | undefined;
  defaults?: Defaults | undefined;
  purpose?: string | undefined;
  migrationSettings?: FlagMigrationSettingsRep | undefined;
  /**
   * Details on the environments for this flag. Only returned if the request is filtered by environment, using the <code>filterEnv</code> query parameter.
   */
  environments?: { [k: string]: FeatureFlagConfig } | undefined;
};

/** @internal */
export const FeatureFlagKind$inboundSchema: z.ZodNativeEnum<
  typeof FeatureFlagKind
> = z.nativeEnum(FeatureFlagKind);

/** @internal */
export const FeatureFlagKind$outboundSchema: z.ZodNativeEnum<
  typeof FeatureFlagKind
> = FeatureFlagKind$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeatureFlagKind$ {
  /** @deprecated use `FeatureFlagKind$inboundSchema` instead. */
  export const inboundSchema = FeatureFlagKind$inboundSchema;
  /** @deprecated use `FeatureFlagKind$outboundSchema` instead. */
  export const outboundSchema = FeatureFlagKind$outboundSchema;
}

/** @internal */
export const FeatureFlag$inboundSchema: z.ZodType<
  FeatureFlag,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  kind: FeatureFlagKind$inboundSchema,
  description: z.string().optional(),
  key: z.string(),
  _version: z.number().int(),
  creationDate: z.number().int(),
  includeInSnippet: z.boolean().optional(),
  clientSideAvailability: ClientSideAvailability$inboundSchema.optional(),
  variations: z.array(Variation$inboundSchema),
  temporary: z.boolean(),
  tags: z.array(z.string()),
  _links: z.record(Link$inboundSchema),
  maintainerId: z.string().optional(),
  _maintainer: MemberSummary$inboundSchema.optional(),
  maintainerTeamKey: z.string().optional(),
  _maintainerTeam: MaintainerTeam$inboundSchema.optional(),
  goalIds: z.array(z.string()).optional(),
  experiments: ExperimentInfoRep$inboundSchema,
  customProperties: z.record(CustomProperty$inboundSchema),
  archived: z.boolean(),
  archivedDate: z.number().int().optional(),
  deprecated: z.boolean().optional(),
  deprecatedDate: z.number().int().optional(),
  defaults: Defaults$inboundSchema.optional(),
  _purpose: z.string().optional(),
  migrationSettings: FlagMigrationSettingsRep$inboundSchema.optional(),
  environments: z.record(FeatureFlagConfig$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_version": "version",
    "_links": "links",
    "_maintainer": "maintainer",
    "_maintainerTeam": "maintainerTeam",
    "_purpose": "purpose",
  });
});

/** @internal */
export type FeatureFlag$Outbound = {
  name: string;
  kind: string;
  description?: string | undefined;
  key: string;
  _version: number;
  creationDate: number;
  includeInSnippet?: boolean | undefined;
  clientSideAvailability?: ClientSideAvailability$Outbound | undefined;
  variations: Array<Variation$Outbound>;
  temporary: boolean;
  tags: Array<string>;
  _links: { [k: string]: Link$Outbound };
  maintainerId?: string | undefined;
  _maintainer?: MemberSummary$Outbound | undefined;
  maintainerTeamKey?: string | undefined;
  _maintainerTeam?: MaintainerTeam$Outbound | undefined;
  goalIds?: Array<string> | undefined;
  experiments: ExperimentInfoRep$Outbound;
  customProperties: { [k: string]: CustomProperty$Outbound };
  archived: boolean;
  archivedDate?: number | undefined;
  deprecated?: boolean | undefined;
  deprecatedDate?: number | undefined;
  defaults?: Defaults$Outbound | undefined;
  _purpose?: string | undefined;
  migrationSettings?: FlagMigrationSettingsRep$Outbound | undefined;
  environments?: { [k: string]: FeatureFlagConfig$Outbound } | undefined;
};

/** @internal */
export const FeatureFlag$outboundSchema: z.ZodType<
  FeatureFlag$Outbound,
  z.ZodTypeDef,
  FeatureFlag
> = z.object({
  name: z.string(),
  kind: FeatureFlagKind$outboundSchema,
  description: z.string().optional(),
  key: z.string(),
  version: z.number().int(),
  creationDate: z.number().int(),
  includeInSnippet: z.boolean().optional(),
  clientSideAvailability: ClientSideAvailability$outboundSchema.optional(),
  variations: z.array(Variation$outboundSchema),
  temporary: z.boolean(),
  tags: z.array(z.string()),
  links: z.record(Link$outboundSchema),
  maintainerId: z.string().optional(),
  maintainer: MemberSummary$outboundSchema.optional(),
  maintainerTeamKey: z.string().optional(),
  maintainerTeam: MaintainerTeam$outboundSchema.optional(),
  goalIds: z.array(z.string()).optional(),
  experiments: ExperimentInfoRep$outboundSchema,
  customProperties: z.record(CustomProperty$outboundSchema),
  archived: z.boolean(),
  archivedDate: z.number().int().optional(),
  deprecated: z.boolean().optional(),
  deprecatedDate: z.number().int().optional(),
  defaults: Defaults$outboundSchema.optional(),
  purpose: z.string().optional(),
  migrationSettings: FlagMigrationSettingsRep$outboundSchema.optional(),
  environments: z.record(FeatureFlagConfig$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    version: "_version",
    links: "_links",
    maintainer: "_maintainer",
    maintainerTeam: "_maintainerTeam",
    purpose: "_purpose",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeatureFlag$ {
  /** @deprecated use `FeatureFlag$inboundSchema` instead. */
  export const inboundSchema = FeatureFlag$inboundSchema;
  /** @deprecated use `FeatureFlag$outboundSchema` instead. */
  export const outboundSchema = FeatureFlag$outboundSchema;
  /** @deprecated use `FeatureFlag$Outbound` instead. */
  export type Outbound = FeatureFlag$Outbound;
}

export function featureFlagToJSON(featureFlag: FeatureFlag): string {
  return JSON.stringify(FeatureFlag$outboundSchema.parse(featureFlag));
}

export function featureFlagFromJSON(
  jsonString: string,
): SafeParseResult<FeatureFlag, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FeatureFlag$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FeatureFlag' from JSON`,
  );
}
