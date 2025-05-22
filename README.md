# LaunchDarkly's Model Context Protocol (MCP) Server

The official [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for [LaunchDarkly](https://launchdarkly.com/).

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@launchdarkly/mcp-server&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- No Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [LaunchDarkly's Model Context Protocol (MCP) Server](#launchdarklys-model-context-protocol-mcp-server)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- No SDK Installation [installation] -->
## Installation

This MCP server can be installed in any AI client that supports the MCP protocol. Refer to your AI client's instructions if it isn't listed here.

### Cursor installation steps

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "LaunchDarkly": {
      "command": "npx",
      "args": [
        "-y", "--package", "@launchdarkly/mcp-server",
        "--", "mcp", "start",
        "--api-key", "api-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      ]
    }
  }
}
```

Specify your API key as found on LaunchDarkly's Authorization page.

### Claude installation steps

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "LaunchDarkly": {
      "command": "npx",
      "args": [
        "-y", "--package", "@launchdarkly/mcp-server",
        "--", "mcp", "start",
        "--api-key", "api-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      ]
    }
  }
}
```

Specify your API key as found on LaunchDarkly's Authorization page.

### Standalone binary installation steps

You can also run the MCP server as a standalone binary with no additional dependencies. You must pull these binaries from available GitHub releases while specifying the appropriate `tag` value:

```bash
curl -L -o mcp-server \
    https://github.com/launchdarkly/mcp-server/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- No SDK Example Usage [usage] -->

<!-- No Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [aiConfigs](docs/sdks/aiconfigs/README.md)

* [list](docs/sdks/aiconfigs/README.md#list) - List AI Configs
* [create](docs/sdks/aiconfigs/README.md#create) - Create new AI Config
* [delete](docs/sdks/aiconfigs/README.md#delete) - Delete AI Config
* [get](docs/sdks/aiconfigs/README.md#get) - Get AI Config
* [update](docs/sdks/aiconfigs/README.md#update) - Update AI Config
* [createVariation](docs/sdks/aiconfigs/README.md#createvariation) - Create AI Config variation
* [deleteVariation](docs/sdks/aiconfigs/README.md#deletevariation) - Delete AI Config variation
* [getVariation](docs/sdks/aiconfigs/README.md#getvariation) - Get AI Config variation
* [updateVariation](docs/sdks/aiconfigs/README.md#updatevariation) - Update AI Config variation

### [featureFlags](docs/sdks/featureflags/README.md)

* [list](docs/sdks/featureflags/README.md#list) - List feature flags
* [create](docs/sdks/featureflags/README.md#create) - Create a feature flag
* [get](docs/sdks/featureflags/README.md#get) - Get feature flag
* [patch](docs/sdks/featureflags/README.md#patch) - Update feature flag
* [delete](docs/sdks/featureflags/README.md#delete) - Delete feature flag


</details>
<!-- End Available Resources and Operations [operations] -->

<!-- No Standalone functions [standalone-funcs] -->

<!-- No Retries [retries] -->

<!-- No Error Handling [errors] -->

<!-- No Server Selection [server] -->

<!-- No Custom HTTP Client [http-client] -->

<!-- No Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

## Available environments

Most customer accounts run on LaunchDarkly's commercial (default) environment. Customers on other environments can specify the `--server-url` argument to connect to the appropriate environment. For example, customers on LaunchDarkly's Federal environment should specify `--server-url https://app.launchdarkly.us` when starting their MCP server.

| #   | Server URL                        | Environment          |
| --- | --------------------------------- | -------------------- |
| 0   | `https://app.launchdarkly.com`    | Commercial (Default) |
| 1   | `https://app.launchdarkly.us`     | Federal              |
| 2   | `https://app.eu.launchdarkly.com` | EU                   |

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@launchdarkly/mcp-server&utm_campaign=typescript)
