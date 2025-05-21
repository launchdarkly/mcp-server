# PersistentStoreIntegrationsBeta
(*persistentStoreIntegrationsBeta*)

## Overview

> ### This feature is in beta
>
> To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](https://launchdarkly.com/docs/api#beta-resources).
>
> Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.

### Persistent store integrations

Persistent store integrations, also called "big segment" store integrations, are required when you use a server-side SDK and big segments. You can use the persistent store integrations API endpoints to manage these integrations.

> ### Synced segments and larger list-based segments are an Enterprise feature
>
> Segments synced from external tools and larger list-based segments with more than 15,000 entries are the two kinds of "big segment." LaunchDarkly uses different implementations for different types of segments so that all of your segments have good performance.
>
> These segments are available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

[Segments synced from external tools](https://launchdarkly.com/docs/home/flags/synced-segments) and [larger list-based segments](https://launchdarkly.com/docs/home/flags/list-based-segments) are the two kinds of big segment. If you are using server-side SDKs, these segments require a persistent store within your infrastructure. LaunchDarkly keeps the persistent store up to date and consults it during flag evaluation.

You need either a persistent store integration or a [Relay Proxy](https://launchdarkly.com/docs/sdk/relay-proxy) to support these segments. The persistent store integrations API lets you manage the persistent store integrations.

To learn more about segments, read [Segments](https://launchdarkly.com/docs/home/flags/segments) and [Segment configuration](https://launchdarkly.com/docs/home/flags/segment-config).

Several of the endpoints in the persistent store integrations API require an integration ID. The integration ID is returned as part of the [Create big segment store integration](https://launchdarkly.com/docs/api/persistent-store-integrations-beta/create-big-segment-store-integration) response, in the `_id` field. It is also returned as part of the [List all big segment store integrations](https://launchdarkly.com/docs/api/persistent-store-integrations-beta/get-big-segment-store-integrations) response, in the `_id` field of each element in the `items` array.

You can find other APIs for working with big segments under [Segments](https://launchdarkly.com/docs/api/segments).


### Available Operations

* [getBigSegmentStoreIntegrations](#getbigsegmentstoreintegrations) - List all big segment store integrations
* [createBigSegmentStoreIntegration](#createbigsegmentstoreintegration) - Create big segment store integration
* [getBigSegmentStoreIntegration](#getbigsegmentstoreintegration) - Get big segment store integration by ID
* [deleteBigSegmentStoreIntegration](#deletebigsegmentstoreintegration) - Delete big segment store integration
* [patchBigSegmentStoreIntegration](#patchbigsegmentstoreintegration) - Update big segment store integration

## getBigSegmentStoreIntegrations

List all big segment store integrations.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.persistentStoreIntegrationsBeta.getBigSegmentStoreIntegrations();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { persistentStoreIntegrationsBetaGetBigSegmentStoreIntegrations } from "@launchdarkly/mcp-server/funcs/persistentStoreIntegrationsBetaGetBigSegmentStoreIntegrations.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await persistentStoreIntegrationsBetaGetBigSegmentStoreIntegrations(launchdarklyMcpServer);

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

**Promise\<[models.BigSegmentStoreIntegrationCollection](../../models/bigsegmentstoreintegrationcollection.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## createBigSegmentStoreIntegration


Create a persistent store integration.

If you are using server-side SDKs, segments synced from external tools and larger list-based segments require a persistent store within your infrastructure. LaunchDarkly keeps the persistent store up to date and consults it during flag evaluation.

You can use either Redis or DynamoDB as your persistent store. When you create a persistent store integration, the fields in the `config` object in the request vary depending on which persistent store you use.

If you are using Redis to create your persistent store integration, you will need to know:

* Your Redis host
* Your Redis port
* Your Redis username
* Your Redis password
* Whether or not LaunchDarkly should connect using TLS

If you are using DynamoDB to create your persistent store integration, you will need to know:

* Your DynamoDB table name. The table must have the following schema:
  * Partition key: `namespace` (string)
  * Sort key: `key` (string)
* Your DynamoDB Amazon Web Services (AWS) region.
* Your AWS role Amazon Resource Name (ARN). This is the role that LaunchDarkly will assume to manage your DynamoDB table.
* The External ID you specified when creating your Amazon Resource Name (ARN).

To learn more, read [Segment configuration](https://launchdarkly.com/docs/home/flags/segment-config).


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.persistentStoreIntegrationsBeta.createBigSegmentStoreIntegration({
    projectKey: "<value>",
    environmentKey: "<value>",
    integrationKey: "<value>",
    integrationDeliveryConfigurationPost: {
      on: false,
      config: {
        "optional": "example value for optional formVariables property for sample-integration",
        "required": "example value for required formVariables property for sample-integration",
      },
      tags: [
        "example-tag",
      ],
      name: "Example persistent store integration",
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
import { persistentStoreIntegrationsBetaCreateBigSegmentStoreIntegration } from "@launchdarkly/mcp-server/funcs/persistentStoreIntegrationsBetaCreateBigSegmentStoreIntegration.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await persistentStoreIntegrationsBetaCreateBigSegmentStoreIntegration(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
    integrationKey: "<value>",
    integrationDeliveryConfigurationPost: {
      on: false,
      config: {
        "optional": "example value for optional formVariables property for sample-integration",
        "required": "example value for required formVariables property for sample-integration",
      },
      tags: [
        "example-tag",
      ],
      name: "Example persistent store integration",
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
| `request`                                                                                                                                                                      | [operations.CreateBigSegmentStoreIntegrationRequest](../../models/operations/createbigsegmentstoreintegrationrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BigSegmentStoreIntegration](../../models/bigsegmentstoreintegration.md)\>**

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

## getBigSegmentStoreIntegration

Get a big segment store integration by ID.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.persistentStoreIntegrationsBeta.getBigSegmentStoreIntegration({
    projectKey: "<value>",
    environmentKey: "<value>",
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { persistentStoreIntegrationsBetaGetBigSegmentStoreIntegration } from "@launchdarkly/mcp-server/funcs/persistentStoreIntegrationsBetaGetBigSegmentStoreIntegration.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await persistentStoreIntegrationsBetaGetBigSegmentStoreIntegration(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetBigSegmentStoreIntegrationRequest](../../models/operations/getbigsegmentstoreintegrationrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BigSegmentStoreIntegration](../../models/bigsegmentstoreintegration.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## deleteBigSegmentStoreIntegration

Delete a persistent store integration. Each integration uses either Redis or DynamoDB.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.persistentStoreIntegrationsBeta.deleteBigSegmentStoreIntegration({
    projectKey: "<value>",
    environmentKey: "<value>",
    integrationKey: "<value>",
    integrationId: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { persistentStoreIntegrationsBetaDeleteBigSegmentStoreIntegration } from "@launchdarkly/mcp-server/funcs/persistentStoreIntegrationsBetaDeleteBigSegmentStoreIntegration.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await persistentStoreIntegrationsBetaDeleteBigSegmentStoreIntegration(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteBigSegmentStoreIntegrationRequest](../../models/operations/deletebigsegmentstoreintegrationrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## patchBigSegmentStoreIntegration

Update a big segment store integration. Updating a big segment store requires a [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.persistentStoreIntegrationsBeta.patchBigSegmentStoreIntegration({
    projectKey: "<value>",
    environmentKey: "<value>",
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { persistentStoreIntegrationsBetaPatchBigSegmentStoreIntegration } from "@launchdarkly/mcp-server/funcs/persistentStoreIntegrationsBetaPatchBigSegmentStoreIntegration.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await persistentStoreIntegrationsBetaPatchBigSegmentStoreIntegration(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.PatchBigSegmentStoreIntegrationRequest](../../models/operations/patchbigsegmentstoreintegrationrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BigSegmentStoreIntegration](../../models/bigsegmentstoreintegration.md)\>**

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