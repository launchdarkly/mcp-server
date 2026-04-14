---
name: launchdarkly-mcp
description: Use LaunchDarkly MCP tools for feature flags, AI Configs, environments, and code references. Prefer the installed MCP servers; ask for project or environment context when the user has not provided it.
---

When the user works with LaunchDarkly:

- Use **launchdarkly-ai-configs** for AI Configs (list, get, variations, targeting).
- Use **launchdarkly-fm** for feature flags and related FM operations.

If a call fails for auth, remind them to connect or supply a LaunchDarkly API access token per their Codex or MCP client settings.

For a single local stdio server instead of the hosted URLs, the repository README documents `npx @launchdarkly/mcp-server` with `mcp start` and `--api-key`.
