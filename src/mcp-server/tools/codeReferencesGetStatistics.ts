import { codeReferencesGetStatistics } from "../../funcs/codeReferencesGetStatistics.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCodeRefStatisticsRequest$inboundSchema,
};

export const tool$codeReferencesGetStatistics: ToolDefinition<typeof args> = {
  name: "get-code-ref-statistics",
  description:
    `Returns the number of repositories and code references for each feature flag in a project. ` +
    `Use this tool before archiving or removing a flag to verify it is no longer referenced in source code. ` +
    `Optionally filter to a specific flag with the flagKey parameter. ` +
    `Response includes repoCount, refCount, and a per-repository breakdown with branch and file paths.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await codeReferencesGetStatistics(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
