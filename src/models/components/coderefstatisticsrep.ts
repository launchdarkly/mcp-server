import * as z from "zod/v3";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Link,
  Link$inboundSchema,
} from "./link.js";

export type StatisticRep = {
  name: string;
  type: "bitbucket" | "custom" | "github" | "gitlab";
  sourceLink: string;
  defaultBranch: string;
  enabled: boolean;
  version: number;
  hunkCount: number;
  fileCount: number;
  links: { [k: string]: Link };
  latestCommitTime?: number | undefined;
};

export type StatisticCollectionRep = {
  flags: { [flagKey: string]: Array<StatisticRep> };
  links: { [k: string]: Link };
};

/** @internal */
const StatisticRep$inboundSchema: z.ZodType<
  StatisticRep,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  type: z.enum(["bitbucket", "custom", "github", "gitlab"]),
  sourceLink: z.string(),
  defaultBranch: z.string(),
  enabled: z.boolean(),
  version: z.number().int(),
  hunkCount: z.number().int(),
  fileCount: z.number().int(),
  _links: z.record(Link$inboundSchema),
  latestCommitTime: z.number().optional(),
}).transform((v) => remap$(v, { "_links": "links" }));

/** @internal */
export const StatisticCollectionRep$inboundSchema: z.ZodType<
  StatisticCollectionRep,
  z.ZodTypeDef,
  unknown
> = z.object({
  flags: z.record(z.array(StatisticRep$inboundSchema)),
  _links: z.record(Link$inboundSchema),
}).transform((v) => remap$(v, { "_links": "links" }));
