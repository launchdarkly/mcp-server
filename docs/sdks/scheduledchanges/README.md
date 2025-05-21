# ScheduledChanges
(*scheduledChanges*)

## Overview

> ### Scheduled flag changes is an Enterprise feature
>
> Scheduled flag changes is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

Schedule the specified flag targeting changes to take effect at the selected time. You may schedule multiple changes for a flag each with a different `ExecutionDate`. To learn more, read [Scheduled flag changes](https://launchdarkly.com/docs/home/releases/scheduled-changes).

Several of the endpoints in the scheduled changes API require a scheduled change ID. The scheduled change ID is returned as part of the [Create scheduled changes workflow](https://launchdarkly.com/docs/api/scheduled-changes/post-flag-config-scheduled-changes) and [List scheduled changes](https://launchdarkly.com/docs/api/scheduled-changes/get-flag-config-scheduled-changes) responses. It is the `_id` field, or the `_id` field of each element in the `items` array.


### Available Operations

* [getFlagConfigScheduledChanges](#getflagconfigscheduledchanges) - List scheduled changes
* [postFlagConfigScheduledChanges](#postflagconfigscheduledchanges) - Create scheduled changes workflow
* [getFeatureFlagScheduledChange](#getfeatureflagscheduledchange) - Get a scheduled change
* [deleteFlagConfigScheduledChanges](#deleteflagconfigscheduledchanges) - Delete scheduled changes workflow
* [patchFlagConfigScheduledChange](#patchflagconfigscheduledchange) - Update scheduled changes workflow

## getFlagConfigScheduledChanges

Get a list of scheduled changes that will be applied to the feature flag.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.scheduledChanges.getFlagConfigScheduledChanges({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
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
import { scheduledChangesGetFlagConfigScheduledChanges } from "@launchdarkly/mcp-server/funcs/scheduledChangesGetFlagConfigScheduledChanges.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await scheduledChangesGetFlagConfigScheduledChanges(launchdarklyMcpServer, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetFlagConfigScheduledChangesRequest](../../models/operations/getflagconfigscheduledchangesrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FeatureFlagScheduledChanges](../../models/featureflagscheduledchanges.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## postFlagConfigScheduledChanges

Create scheduled changes for a feature flag. If the `ignoreConficts` query parameter is false and there are conflicts between these instructions and existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.scheduledChanges.postFlagConfigScheduledChanges({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    postFlagScheduledChangesInput: {
      comment: "Optional comment describing the scheduled changes",
      executionDate: 1718467200000,
      instructions: [
        {
          "kind": "turnFlagOn",
        },
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
import { scheduledChangesPostFlagConfigScheduledChanges } from "@launchdarkly/mcp-server/funcs/scheduledChangesPostFlagConfigScheduledChanges.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await scheduledChangesPostFlagConfigScheduledChanges(launchdarklyMcpServer, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    postFlagScheduledChangesInput: {
      comment: "Optional comment describing the scheduled changes",
      executionDate: 1718467200000,
      instructions: [
        {
          "kind": "turnFlagOn",
        },
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
| `request`                                                                                                                                                                      | [operations.PostFlagConfigScheduledChangesRequest](../../models/operations/postflagconfigscheduledchangesrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FeatureFlagScheduledChange](../../models/featureflagscheduledchange.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.StatusConflictErrorRep   | 409                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getFeatureFlagScheduledChange

Get a scheduled change that will be applied to the feature flag by ID.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.scheduledChanges.getFeatureFlagScheduledChange({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
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
import { scheduledChangesGetFeatureFlagScheduledChange } from "@launchdarkly/mcp-server/funcs/scheduledChangesGetFeatureFlagScheduledChange.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await scheduledChangesGetFeatureFlagScheduledChange(launchdarklyMcpServer, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetFeatureFlagScheduledChangeRequest](../../models/operations/getfeatureflagscheduledchangerequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FeatureFlagScheduledChange](../../models/featureflagscheduledchange.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## deleteFlagConfigScheduledChanges

Delete a scheduled changes workflow.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.scheduledChanges.deleteFlagConfigScheduledChanges({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { scheduledChangesDeleteFlagConfigScheduledChanges } from "@launchdarkly/mcp-server/funcs/scheduledChangesDeleteFlagConfigScheduledChanges.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await scheduledChangesDeleteFlagConfigScheduledChanges(launchdarklyMcpServer, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteFlagConfigScheduledChangesRequest](../../models/operations/deleteflagconfigscheduledchangesrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.StatusConflictErrorRep   | 409                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## patchFlagConfigScheduledChange


Update a scheduled change, overriding existing instructions with the new ones. Updating a scheduled change uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating scheduled changes.

<details>
<summary>Click to expand instructions for <strong>updating scheduled changes</strong></summary>

#### deleteScheduledChange

Removes the scheduled change.

Here's an example:

```json
{
  "instructions": [{ "kind": "deleteScheduledChange" }]
}
```

#### replaceScheduledChangesInstructions

Removes the existing scheduled changes and replaces them with the new instructions.

##### Parameters

- `value`: An array of the new actions to perform when the execution date for these scheduled changes arrives. Supported scheduled actions are `turnFlagOn` and `turnFlagOff`.

Here's an example that replaces the scheduled changes with new instructions to turn flag targeting off:

```json
{
  "instructions": [
    {
      "kind": "replaceScheduledChangesInstructions",
      "value": [ {"kind": "turnFlagOff"} ]
    }
  ]
}
```

#### updateScheduledChangesExecutionDate

Updates the execution date for the scheduled changes.

##### Parameters

- `value`: the new execution date, in Unix milliseconds.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateScheduledChangesExecutionDate",
      "value": 1754092860000
    }
  ]
}
```

</details>


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.scheduledChanges.patchFlagConfigScheduledChange({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
    flagScheduledChangesInput: {
      comment: "Optional comment describing the update to the scheduled changes",
      instructions: [
        {
          "kind": "replaceScheduledChangesInstructions",
          "value": [
            {
              "kind": "turnFlagOff",
            },
          ],
        },
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
import { scheduledChangesPatchFlagConfigScheduledChange } from "@launchdarkly/mcp-server/funcs/scheduledChangesPatchFlagConfigScheduledChange.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await scheduledChangesPatchFlagConfigScheduledChange(launchdarklyMcpServer, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
    flagScheduledChangesInput: {
      comment: "Optional comment describing the update to the scheduled changes",
      instructions: [
        {
          "kind": "replaceScheduledChangesInstructions",
          "value": [
            {
              "kind": "turnFlagOff",
            },
          ],
        },
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
| `request`                                                                                                                                                                      | [operations.PatchFlagConfigScheduledChangeRequest](../../models/operations/patchflagconfigscheduledchangerequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FeatureFlagScheduledChange](../../models/featureflagscheduledchange.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.StatusConflictErrorRep   | 409                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |