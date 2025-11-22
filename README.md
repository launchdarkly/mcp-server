# LaunchDarkly's Model Context Protocol (MCP) Server

The official [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for [LaunchDarkly](https://launchdarkly.com/).

<div align="left">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- No Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [LaunchDarkly's Model Context Protocol (MCP) Server](#launchdarklys-model-context-protocol-mcp-server)
  * [Installation](#installation)
  * [Requirements](#requirements)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Available Environments](#available-environments)
  * [Contributions](#contributions)
  * [About LaunchDarkly](#about-launchdarkly)

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
        "-y", "--package", "@launchdarkly/mcp-server", "--", "mcp", "start",
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
        "-y", "--package", "@launchdarkly/mcp-server", "--", "mcp", "start",
        "--api-key", "api-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      ]
    }
  }
}
```

Specify your API key as found on LaunchDarkly's Authorization page.

### Qodo Gen installation steps

1. Open [Qodo Gen](https://docs.qodo.ai/qodo-documentation/qodo-gen) chat panel in VSCode or IntelliJ.
2. Click `Connect more tools`.
3. Click `+ Add new MCP`.
4. Add the following configuration:

```json
{
  "mcpServers": {
    "LaunchDarkly": {
      "command": "npx",
      "args": [
        "-y", "--package", "@launchdarkly/mcp-server", "--", "mcp", "start",
        "--api-key", "api-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      ]
    }
  }
}
```

Specify your API key as found on LaunchDarkly's Authorization page.

5. Click `Save`.

### Standalone binary installation steps

You can also run the MCP server as a standalone binary with no additional dependencies. You must pull these binaries from available GitHub releases while specifying the appropriate `tag` value:

```bash
curl -L -o mcp-server https://github.com/launchdarkly/mcp-server/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

### Installation steps from a local clone

You can also run the MCP server locally by cloning this repository. Once cloned, you'll need to install dependencies (`npm install`) and build the server (`npm run build`).

Then, configure your server definition to reference your local clone. For example:

```json
{
  "mcpServers": {
    "launchdarkly": {
      "command": "node",
      "args": [
        "/path/to/mcp-server/bin/mcp-server.js", "start",
        "--api-key", "api-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      ]
    }
  }
}
```

### Installation steps using environment variables

Some AI clients allow for accessing environment variables within MCP configurations. In AI clients where this is supported, you can configure your MCP server to read from an environment variable like `MCP_LD_TOKEN` as follows:

```json
{
  "mcpServers": {
    "launchdarkly": {
      "command": "npx",
      "args": [
        "-y", "--package", "@launchdarkly/mcp-server", "--", "mcp", "start",
        "--api-key", "$LD_ACCESS_TOKEN"
      ],
      "env": {
        "LD_ACCESS_TOKEN": "MCP_LD_TOKEN"
      }
    }
  }
}
```

### Installation steps for Docker

If installing the MCP server from the AWS Markeplace, pull the image using an authenticated role using the provided instructions in the marketplace listing.

To run the container:

```bash
docker run --rm -p 8080:8080 709825985650.dkr.ecr.us-east-1.amazonaws.com/launchdarkly/mcp --api-key api-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx 
```

Then, configure your server definition to reference your local clone. For example:

```json
{
  "mcpServers": {
    "launchdarkly": {
      "command": "npx",
      "args": [
        "-y", "--package", "@launchdarkly/mcp-server", "--", "mcp", "start",
        "--api-key", "$LD_ACCESS_TOKEN"
      ],
      "env": {
        "LD_ACCESS_TOKEN": "MCP_LD_TOKEN"
      }
      "url": "http://localhost:8080/sse"
    }
  }
}
```

This won't work in AI clients (such as Cursor) which don't support accessing environment variables directly within MCP configurations. As a workaround, you can invoke a local script from your MCP configuration. See [here](https://github.com/launchdarkly/mcp-server/issues/26#issuecomment-3064419507) for an example.

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

* [getTargeting](docs/sdks/aiconfigs/README.md#gettargeting) - Show an AI Config's targeting
* [updateTargeting](docs/sdks/aiconfigs/README.md#updatetargeting) - Update AI Config targeting
* [list](docs/sdks/aiconfigs/README.md#list) - List AI Configs
* [create](docs/sdks/aiconfigs/README.md#create) - Create new AI Config
* [delete](docs/sdks/aiconfigs/README.md#delete) - Delete AI Config
* [get](docs/sdks/aiconfigs/README.md#get) - Get AI Config
* [update](docs/sdks/aiconfigs/README.md#update) - Update AI Config
* [createVariation](docs/sdks/aiconfigs/README.md#createvariation) - Create AI Config variation
* [deleteVariation](docs/sdks/aiconfigs/README.md#deletevariation) - Delete AI Config variation
* [getVariation](docs/sdks/aiconfigs/README.md#getvariation) - Get AI Config variation
* [updateVariation](docs/sdks/aiconfigs/README.md#updatevariation) - Update AI Config variation

### [codeReferences](docs/sdks/codereferences/README.md)

* [listRepositories](docs/sdks/codereferences/README.md#listrepositories) - List repositories

### [environments](docs/sdks/environments/README.md)

* [listByProject](docs/sdks/environments/README.md#listbyproject) - List environments

### [featureFlags](docs/sdks/featureflags/README.md)

* [getStatus](docs/sdks/featureflags/README.md#getstatus) - Get flag status across environments
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

## Available Environments

Most customer accounts run on LaunchDarkly's commercial (default) environment. Customers on other environments can specify the `--server-url` argument to connect to the appropriate environment. For example, customers on LaunchDarkly's Federal environment should specify the `--server-url https://app.launchdarkly.us` argument when starting their MCP server.

| Environment          | Server URL                        |
| -------------------- | --------------------------------- |
| Commercial (Default) | `https://app.launchdarkly.com`    |
| Federal              | `https://app.launchdarkly.us`     |
| EU                   | `https://app.eu.launchdarkly.com` |

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

## About LaunchDarkly

- LaunchDarkly is a continuous delivery platform that provides feature flags as a service and allows developers to iterate quickly and safely. We allow you to easily flag your features and manage them from the LaunchDarkly dashboard. With LaunchDarkly, you can:
  - Roll out a new feature to a subset of your users (like a group of users who opt-in to a beta tester group), gathering feedback and bug reports from real-world use cases.
  - Gradually roll out a feature to an increasing percentage of users, and track the effect that the feature has on key metrics (for instance, how likely is a user to complete a purchase if they have feature A versus feature B?).
  - Turn off a feature that you realize is causing performance problems in production, without needing to re-deploy, or even restart the application with a changed configuration file.
  - Grant access to certain features based on user attributes, like payment plan (eg: users on the ‘gold’ plan get access to more features than users in the ‘silver’ plan). 
  - Disable parts of your application to facilitate maintenance, without taking everything offline.
- LaunchDarkly provides feature flag SDKs for a wide variety of languages and technologies. Read [our documentation](https://launchdarkly.com/docs/sdk) for a complete list.
- Explore LaunchDarkly
  - [Sign up for a free LaunchDarkly account](https://app.launchdarkly.com/signup)
  - [launchdarkly.com](https://www.launchdarkly.com/ 'LaunchDarkly Main Website') for more information
  - [launchdarkly.com/docs](https://launchdarkly.com/docs/home 'LaunchDarkly Documentation') for our documentation and SDK reference guides
  - [launchdarkly.com/docs/api](https://launchdarkly.com/docs/api 'LaunchDarkly API Documentation') for our API documentation
  - [blog.launchdarkly.com](https://launchdarkly.com/blog/ 'LaunchDarkly Blog Documentation') for the latest product updates
