/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

/**
 * Example usage of the @launchdarkly/mcp-server SDK
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx featureFlagsList.ts
 */

import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function main() {
  const result = await launchDarkly.list({
    projectKey: "<value>",
  });

  console.log(result);
}

main().catch(console.error);
