# AIConfigsBeta
(*aiConfigsBeta*)

## Overview

> ### This feature is in beta
>
> To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](https://launchdarkly.com/docs/api#beta-resources).
>
> Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.
The AI Configs API allows you to create, retrieve, and edit AI Configs, AI Config variations, and AI model configurations.

An AI Config is a resource in LaunchDarkly that you can use to customize, test, and roll out new large language models (LLMs) within your generative AI applications. Within each AI Config, you define one or more AI Config variations, each of which includes a model configuration and one or more messages. The model configuration can be a standard one from the list provided by LaunchDarkly, or you can define your own custom AI model configuration.

To learn more, read [AI Configs](https://launchdarkly.com/docs/home/ai-configs).


### Available Operations

* [getAIConfigs](#getaiconfigs) - List AI Configs
* [postAIConfig](#postaiconfig) - Create new AI Config
* [getAIConfig](#getaiconfig) - Get AI Config
* [deleteAIConfig](#deleteaiconfig) - Delete AI Config
* [patchAIConfig](#patchaiconfig) - Update AI Config
* [postAIConfigVariation](#postaiconfigvariation) - Create AI Config variation
* [getAIConfigVariation](#getaiconfigvariation) - Get AI Config variation
* [deleteAIConfigVariation](#deleteaiconfigvariation) - Delete AI Config variation
* [patchAIConfigVariation](#patchaiconfigvariation) - Update AI Config variation
* [getAIConfigMetrics](#getaiconfigmetrics) - Get AI Config metrics
* [getAIConfigMetricsByVariation](#getaiconfigmetricsbyvariation) - Get AI Config metrics by variation
* [postRestrictedModels](#postrestrictedmodels) - Add AI models to the restricted list
* [deleteRestrictedModels](#deleterestrictedmodels) - Remove AI models from the restricted list
* [listModelConfigs](#listmodelconfigs) - List AI model configs
* [postModelConfig](#postmodelconfig) - Create an AI model config
* [getModelConfig](#getmodelconfig) - Get AI model config
* [deleteModelConfig](#deletemodelconfig) - Delete an AI model config

## getAIConfigs

Get a list of all AI Configs in the given project.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.getAIConfigs({
    ldAPIVersion: "beta",
    projectKey: "default",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaGetAIConfigs } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaGetAIConfigs.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaGetAIConfigs(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "default",
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
| `request`                                                                                                                                                                      | [operations.GetAIConfigsRequest](../../models/operations/getaiconfigsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AIConfigs](../../models/aiconfigs.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## postAIConfig

Create a new AI Config within the given project.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.postAIConfig({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    aiConfigPost: {
      key: "key",
      maintainerId: "maintainerId",
      maintainerTeamKey: "maintainerTeamKey",
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaPostAIConfig } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaPostAIConfig.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaPostAIConfig(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    aiConfigPost: {
      key: "key",
      maintainerId: "maintainerId",
      maintainerTeamKey: "maintainerTeamKey",
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
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
| `request`                                                                                                                                                                      | [operations.PostAIConfigRequest](../../models/operations/postaiconfigrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AIConfig](../../models/aiconfig.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403         | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getAIConfig

Retrieve a specific AI Config by its key.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.getAIConfig({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaGetAIConfig } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaGetAIConfig.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaGetAIConfig(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetAIConfigRequest](../../models/operations/getaiconfigrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AIConfig](../../models/aiconfig.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteAIConfig

Delete an existing AI Config.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.aiConfigsBeta.deleteAIConfig({
    ldAPIVersion: "beta",
    projectKey: "default",
    configKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaDeleteAIConfig } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaDeleteAIConfig.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaDeleteAIConfig(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "default",
    configKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteAIConfigRequest](../../models/operations/deleteaiconfigrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## patchAIConfig

Edit an existing AI Config.

The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.

Here's an example:
  ```
    {
      "description": "Example updated description",
      "tags": ["new-tag"]
    }
  ```


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.patchAIConfig({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigPatch: {
      description: "description",
      maintainerId: "maintainerId",
      maintainerTeamKey: "maintainerTeamKey",
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaPatchAIConfig } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaPatchAIConfig.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaPatchAIConfig(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigPatch: {
      description: "description",
      maintainerId: "maintainerId",
      maintainerTeamKey: "maintainerTeamKey",
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
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
| `request`                                                                                                                                                                      | [operations.PatchAIConfigRequest](../../models/operations/patchaiconfigrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AIConfig](../../models/aiconfig.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## postAIConfigVariation

Create a new variation for a given AI Config.

The <code>model</code> in the request body requires a <code>modelName</code> and <code>parameters</code>, for example:

```
  "model": {
    "modelName": "claude-3-opus-20240229",
    "parameters": {
      "max_tokens": 1024
    }
  }
```


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.postAIConfigVariation({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigVariationPost: {
      key: "key",
      messages: [
        {
          content: "content",
          role: "role",
        },
        {
          content: "content",
          role: "role",
        },
      ],
      model: {},
      name: "name",
      modelConfigKey: "modelConfigKey",
      comment: "comment",
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaPostAIConfigVariation } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaPostAIConfigVariation.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaPostAIConfigVariation(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigVariationPost: {
      key: "key",
      messages: [
        {
          content: "content",
          role: "role",
        },
        {
          content: "content",
          role: "role",
        },
      ],
      model: {},
      name: "name",
      modelConfigKey: "modelConfigKey",
      comment: "comment",
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
| `request`                                                                                                                                                                      | [operations.PostAIConfigVariationRequest](../../models/operations/postaiconfigvariationrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AIConfigVariation](../../models/aiconfigvariation.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403         | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getAIConfigVariation

Get an AI Config variation by key. The response includes all variation versions for the given variation key.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.getAIConfigVariation({
    ldAPIVersion: "beta",
    projectKey: "default",
    configKey: "default",
    variationKey: "default",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaGetAIConfigVariation } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaGetAIConfigVariation.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaGetAIConfigVariation(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "default",
    configKey: "default",
    variationKey: "default",
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
| `request`                                                                                                                                                                      | [operations.GetAIConfigVariationRequest](../../models/operations/getaiconfigvariationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AIConfigVariationsResponse](../../models/aiconfigvariationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteAIConfigVariation

Delete a specific variation of an AI Config by config key and variation key.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.aiConfigsBeta.deleteAIConfigVariation({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    variationKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaDeleteAIConfigVariation } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaDeleteAIConfigVariation.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaDeleteAIConfigVariation(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    variationKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteAIConfigVariationRequest](../../models/operations/deleteaiconfigvariationrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## patchAIConfigVariation

Edit an existing variation of an AI Config. This creates a new version of the variation.

The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.

Here's an example:
```
  {
    "messages": [
      {
        "role": "system",
        "content": "The new message"
      }
    ]
  }
```


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.patchAIConfigVariation({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    variationKey: "<value>",
    aiConfigVariationPatch: {
      messages: [
        {
          content: "content",
          role: "role",
        },
        {
          content: "content",
          role: "role",
        },
      ],
      model: {},
      modelConfigKey: "modelConfigKey",
      name: "name",
      published: true,
      state: "state",
      comment: "comment",
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaPatchAIConfigVariation } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaPatchAIConfigVariation.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaPatchAIConfigVariation(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    variationKey: "<value>",
    aiConfigVariationPatch: {
      messages: [
        {
          content: "content",
          role: "role",
        },
        {
          content: "content",
          role: "role",
        },
      ],
      model: {},
      modelConfigKey: "modelConfigKey",
      name: "name",
      published: true,
      state: "state",
      comment: "comment",
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
| `request`                                                                                                                                                                      | [operations.PatchAIConfigVariationRequest](../../models/operations/patchaiconfigvariationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AIConfigVariation](../../models/aiconfigvariation.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getAIConfigMetrics

Retrieve usage metrics for an AI Config by config key.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.getAIConfigMetrics({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    from: 291253,
    to: 124301,
    env: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaGetAIConfigMetrics } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaGetAIConfigMetrics.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaGetAIConfigMetrics(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    from: 291253,
    to: 124301,
    env: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetAIConfigMetricsRequest](../../models/operations/getaiconfigmetricsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Metrics](../../models/metrics.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getAIConfigMetricsByVariation

Retrieve usage metrics for an AI Config by config key, with results split by variation.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.getAIConfigMetricsByVariation({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    from: 418619,
    to: 272609,
    env: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaGetAIConfigMetricsByVariation } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaGetAIConfigMetricsByVariation.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaGetAIConfigMetricsByVariation(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    from: 418619,
    to: 272609,
    env: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetAIConfigMetricsByVariationRequest](../../models/operations/getaiconfigmetricsbyvariationrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MetricByVariation[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## postRestrictedModels

Add AI models, by key, to the restricted list. Keys are included in the response from the [List AI model configs](https://launchdarkly.com/docs/api/ai-configs-beta/list-model-configs) endpoint.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.postRestrictedModels({
    ldAPIVersion: "beta",
    projectKey: "default",
    restrictedModelsRequest: {
      keys: [
        "keys",
        "keys",
      ],
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaPostRestrictedModels } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaPostRestrictedModels.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaPostRestrictedModels(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "default",
    restrictedModelsRequest: {
      keys: [
        "keys",
        "keys",
      ],
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
| `request`                                                                                                                                                                      | [operations.PostRestrictedModelsRequest](../../models/operations/postrestrictedmodelsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RestrictedModelsResponse](../../models/restrictedmodelsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteRestrictedModels

Remove AI models, by key, from the restricted list.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.aiConfigsBeta.deleteRestrictedModels({
    ldAPIVersion: "beta",
    projectKey: "default",
    restrictedModelsRequest: {
      keys: [
        "keys",
        "keys",
      ],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaDeleteRestrictedModels } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaDeleteRestrictedModels.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaDeleteRestrictedModels(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "default",
    restrictedModelsRequest: {
      keys: [
        "keys",
        "keys",
      ],
    },
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
| `request`                                                                                                                                                                      | [operations.DeleteRestrictedModelsRequest](../../models/operations/deleterestrictedmodelsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## listModelConfigs

Get all AI model configs for a project.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.listModelConfigs({
    ldAPIVersion: "beta",
    projectKey: "default",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaListModelConfigs } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaListModelConfigs.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaListModelConfigs(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "default",
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
| `request`                                                                                                                                                                      | [operations.ListModelConfigsRequest](../../models/operations/listmodelconfigsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ModelConfig[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## postModelConfig

Create an AI model config. You can use this in any variation for any AI Config in your project.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.postModelConfig({
    ldAPIVersion: "beta",
    projectKey: "default",
    modelConfigPost: {
      name: "name",
      key: "key",
      id: "id",
      icon: "icon",
      provider: "provider",
      params: {},
      customParams: {},
      tags: [
        "tags",
        "tags",
      ],
      costPerInputToken: 0.8008281904610115,
      costPerOutputToken: 6.027456183070403,
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaPostModelConfig } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaPostModelConfig.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaPostModelConfig(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "default",
    modelConfigPost: {
      name: "name",
      key: "key",
      id: "id",
      icon: "icon",
      provider: "provider",
      params: {},
      customParams: {},
      tags: [
        "tags",
        "tags",
      ],
      costPerInputToken: 0.8008281904610115,
      costPerOutputToken: 6.027456183070403,
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
| `request`                                                                                                                                                                      | [operations.PostModelConfigRequest](../../models/operations/postmodelconfigrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ModelConfig](../../models/modelconfig.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getModelConfig

Get an AI model config by key.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.aiConfigsBeta.getModelConfig({
    ldAPIVersion: "beta",
    projectKey: "default",
    modelConfigKey: "default",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaGetModelConfig } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaGetModelConfig.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaGetModelConfig(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "default",
    modelConfigKey: "default",
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
| `request`                                                                                                                                                                      | [operations.GetModelConfigRequest](../../models/operations/getmodelconfigrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ModelConfig](../../models/modelconfig.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteModelConfig

Delete an AI model config.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.aiConfigsBeta.deleteModelConfig({
    ldAPIVersion: "beta",
    projectKey: "default",
    modelConfigKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsBetaDeleteModelConfig } from "@launchdarkly/mcp-server/funcs/aiConfigsBetaDeleteModelConfig.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsBetaDeleteModelConfig(launchdarklyMcpServer, {
    ldAPIVersion: "beta",
    projectKey: "default",
    modelConfigKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteModelConfigRequest](../../models/operations/deletemodelconfigrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |