# @launchdarkly/mcp-server

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@launchdarkly/mcp-server* API.

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
* [@launchdarkly/mcp-server](#launchdarklymcp-server)
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

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/launchdarkly-labs/mcp-server
```

### PNPM

```bash
pnpm add https://github.com/launchdarkly-labs/mcp-server
```

### Bun

```bash
bun add https://github.com/launchdarkly-labs/mcp-server
```

### Yarn

```bash
yarn add https://github.com/launchdarkly-labs/mcp-server zod

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

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.list({
    projectKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable   |
| -------- | ------ | ------- | ---------------------- |
| `apiKey` | apiKey | API key | `LAUNCHDARKLY_API_KEY` |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.list({
    projectKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

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

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`aiConfigsCreate`](docs/sdks/aiconfigs/README.md#create) - Create new AI Config
- [`aiConfigsCreateVariation`](docs/sdks/aiconfigs/README.md#createvariation) - Create AI Config variation
- [`aiConfigsDelete`](docs/sdks/aiconfigs/README.md#delete) - Delete AI Config
- [`aiConfigsDeleteVariation`](docs/sdks/aiconfigs/README.md#deletevariation) - Delete AI Config variation
- [`aiConfigsGet`](docs/sdks/aiconfigs/README.md#get) - Get AI Config
- [`aiConfigsGetVariation`](docs/sdks/aiconfigs/README.md#getvariation) - Get AI Config variation
- [`aiConfigsList`](docs/sdks/aiconfigs/README.md#list) - List AI Configs
- [`aiConfigsUpdate`](docs/sdks/aiconfigs/README.md#update) - Update AI Config
- [`aiConfigsUpdateVariation`](docs/sdks/aiconfigs/README.md#updatevariation) - Update AI Config variation
- [`featureFlagsCreate`](docs/sdks/featureflags/README.md#create) - Create a feature flag
- [`featureFlagsDelete`](docs/sdks/featureflags/README.md#delete) - Delete feature flag
- [`featureFlagsGet`](docs/sdks/featureflags/README.md#get) - Get feature flag
- [`featureFlagsList`](docs/sdks/featureflags/README.md#list) - List feature flags
- [`featureFlagsPatch`](docs/sdks/featureflags/README.md#patch) - Update feature flag

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.list({
    projectKey: "<value>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.list({
    projectKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `list` method may throw the following errors:

| Error Type                    | Status Code | Content Type     |
| ----------------------------- | ----------- | ---------------- |
| errors.InvalidRequestErrorRep | 400         | application/json |
| errors.UnauthorizedErrorRep   | 401         | application/json |
| errors.ForbiddenErrorRep      | 403         | application/json |
| errors.NotFoundErrorRep       | 404         | application/json |
| errors.RateLimitedErrorRep    | 429         | application/json |
| errors.APIError               | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";
import {
  ForbiddenErrorRep,
  InvalidRequestErrorRep,
  NotFoundErrorRep,
  RateLimitedErrorRep,
  SDKValidationError,
  UnauthorizedErrorRep,
} from "@launchdarkly/mcp-server/models/errors";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await launchDarkly.featureFlags.list({
      projectKey: "<value>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof InvalidRequestErrorRep): {
        // Handle err.data$: InvalidRequestErrorRepData
        console.error(err);
        return;
      }
      case (err instanceof UnauthorizedErrorRep): {
        // Handle err.data$: UnauthorizedErrorRepData
        console.error(err);
        return;
      }
      case (err instanceof ForbiddenErrorRep): {
        // Handle err.data$: ForbiddenErrorRepData
        console.error(err);
        return;
      }
      case (err instanceof NotFoundErrorRep): {
        // Handle err.data$: NotFoundErrorRepData
        console.error(err);
        return;
      }
      case (err instanceof RateLimitedErrorRep): {
        // Handle err.data$: RateLimitedErrorRepData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                         | Description     |
| --- | ------------------------------ | --------------- |
| 0   | `https://app.launchdarkly.com` |  Default        |
| 1   | `https://app.launchdarkly.us`  |  Federal        |
| 2   | `https://app.launchdarkly.com` | Prod API server |

#### Example

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  serverIdx: 2,
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.list({
    projectKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  serverURL: "https://app.launchdarkly.com",
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.list({
    projectKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";
import { HTTPClient } from "@launchdarkly/mcp-server/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new LaunchDarkly({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const sdk = new LaunchDarkly({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `LAUNCHDARKLY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@launchdarkly/mcp-server&utm_campaign=typescript)
