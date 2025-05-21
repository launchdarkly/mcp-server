# FlagImportConfigurations
(*flagImportConfigurations*)

## Overview

### Available Operations

* [list](#list) - List all flag import configurations
* [create](#create) - Create a flag import configuration
* [get](#get) - Get a single flag import configuration
* [update](#update) - Update a flag import configuration
* [delete](#delete) - Delete a flag import configuration
* [triggerJob](#triggerjob) - Trigger a single flag import run

## list

List all flag import configurations.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.flagImportConfigurations.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { flagImportConfigurationsList } from "@launchdarkly/mcp-server/funcs/flagImportConfigurationsList.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await flagImportConfigurationsList(launchDarkly);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagImportIntegrationCollection](../../models/components/flagimportintegrationcollection.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## create

Create a new flag import configuration. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`. The `config` object in the request body schema is described by the global integration settings, as specified by the <code>formVariables</code> in the <code>manifest.json</code> for this integration. It varies slightly based on the `integrationKey`.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.flagImportConfigurations.create({
    projectKey: "<value>",
    integrationKey: "<value>",
    flagImportConfigurationPost: {
      config: {
        "environmentId": "The ID of the environment in the external system",
        "ldApiKey": "An API key with create flag permissions in your LaunchDarkly account",
        "ldMaintainer": "The ID of the member who will be the maintainer of the imported flags",
        "ldTag": "A tag to apply to all flags imported to LaunchDarkly",
        "splitTag": "If provided, imports only the flags from the external system with this tag. Leave blank to import all flags.",
        "workspaceApiKey": "An API key with read permissions in the external feature management system",
        "workspaceId": "The ID of the workspace in the external system",
      },
      tags: [
        "example-tag",
      ],
      name: "Sample configuration",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { flagImportConfigurationsCreate } from "@launchdarkly/mcp-server/funcs/flagImportConfigurationsCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await flagImportConfigurationsCreate(launchDarkly, {
    projectKey: "<value>",
    integrationKey: "<value>",
    flagImportConfigurationPost: {
      config: {
        "environmentId": "The ID of the environment in the external system",
        "ldApiKey": "An API key with create flag permissions in your LaunchDarkly account",
        "ldMaintainer": "The ID of the member who will be the maintainer of the imported flags",
        "ldTag": "A tag to apply to all flags imported to LaunchDarkly",
        "splitTag": "If provided, imports only the flags from the external system with this tag. Leave blank to import all flags.",
        "workspaceApiKey": "An API key with read permissions in the external feature management system",
        "workspaceId": "The ID of the workspace in the external system",
      },
      tags: [
        "example-tag",
      ],
      name: "Sample configuration",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateFlagImportConfigurationRequest](../../models/operations/createflagimportconfigurationrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagImportIntegration](../../models/components/flagimportintegration.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## get

Get a single flag import configuration by ID. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.flagImportConfigurations.get({
    projectKey: "<value>",
    integrationKey: "<value>",
    integrationId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { flagImportConfigurationsGet } from "@launchdarkly/mcp-server/funcs/flagImportConfigurationsGet.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await flagImportConfigurationsGet(launchDarkly, {
    projectKey: "<value>",
    integrationKey: "<value>",
    integrationId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFlagImportConfigurationRequest](../../models/operations/getflagimportconfigurationrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagImportIntegration](../../models/components/flagimportintegration.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## update

Updating a flag import configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the import configuration fields that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.<br/><br/>You can update the `config`, `tags`, and `name` of the flag import configuration.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.flagImportConfigurations.update({
    projectKey: "<value>",
    integrationKey: "<value>",
    integrationId: "<value>",
    requestBody: [],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { flagImportConfigurationsUpdate } from "@launchdarkly/mcp-server/funcs/flagImportConfigurationsUpdate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await flagImportConfigurationsUpdate(launchDarkly, {
    projectKey: "<value>",
    integrationKey: "<value>",
    integrationId: "<value>",
    requestBody: [],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchFlagImportConfigurationRequest](../../models/operations/patchflagimportconfigurationrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagImportIntegration](../../models/components/flagimportintegration.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## delete

Delete a flag import configuration by ID. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.flagImportConfigurations.delete({
    projectKey: "<value>",
    integrationKey: "<value>",
    integrationId: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { flagImportConfigurationsDelete } from "@launchdarkly/mcp-server/funcs/flagImportConfigurationsDelete.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await flagImportConfigurationsDelete(launchDarkly, {
    projectKey: "<value>",
    integrationKey: "<value>",
    integrationId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFlagImportConfigurationRequest](../../models/operations/deleteflagimportconfigurationrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## triggerJob

Trigger a single flag import run for an existing flag import configuration. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.flagImportConfigurations.triggerJob({
    projectKey: "<value>",
    integrationKey: "<value>",
    integrationId: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { flagImportConfigurationsTriggerJob } from "@launchdarkly/mcp-server/funcs/flagImportConfigurationsTriggerJob.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await flagImportConfigurationsTriggerJob(launchDarkly, {
    projectKey: "<value>",
    integrationKey: "<value>",
    integrationId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TriggerFlagImportJobRequest](../../models/operations/triggerflagimportjobrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |