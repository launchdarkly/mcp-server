# LaunchDarkly's Model Context Protocol (MCP) Server

The official [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for [LaunchDarkly](https://launchdarkly.com/).

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@launchdarkly/mcp-server&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/launchdarkly/mcp). Delete this section before > publishing to a package manager.

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

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @launchdarkly/mcp-server
```

### PNPM

```bash
pnpm add @launchdarkly/mcp-server
```

### Bun

```bash
bun add @launchdarkly/mcp-server
```

### Yarn

```bash
yarn add @launchdarkly/mcp-server zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "LaunchDarkly": {
      "command": "npx",
      "args": [
        "-y", "--package", "@launchdarkly/mcp-server",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "LaunchDarkly": {
      "command": "npx",
      "args": [
        "-y", "--package", "@launchdarkly/mcp-server",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @launchdarkly/mcp-server -- mcp start --help
```
<!-- End SDK Installation [installation] -->

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
