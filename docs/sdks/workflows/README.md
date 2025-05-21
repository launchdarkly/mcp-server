# Workflows
(*workflows*)

## Overview

> ### Workflows is an Enterprise feature
>
> Workflows is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

A workflow is a set of actions that you can schedule in advance to make changes to a feature flag at a future date and time. You can also include approval requests at different stages of a workflow. To learn more, read [Workflows](https://launchdarkly.com/docs/home/releases/workflows).

The actions supported are as follows:

- Turning targeting `ON` or `OFF`
- Setting the default variation
- Adding targets to a given variation
- Creating a rule to target by segment
- Modifying the rollout percentage for rules

You can create multiple stages of a flag release workflow. Unique stages are defined by their conditions: either approvals and/or scheduled changes.

Several of the endpoints in the workflows API require a workflow ID or one or more member IDs. The workflow ID is returned as part of the [Create workflow](https://launchdarkly.com/docs/api/workflows/post-workflow) and [Get workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) responses. It is the `_id` field, or the `_id` field of each element in the `items` array. The member ID is returned as part of the [List account members](https://launchdarkly.com/docs/api/account-members/get-members) response. It is the `_id` field of each element in the `items` array.


### Available Operations

* [get](#get) - Get workflows
* [create](#create) - Create workflow
* [fetchById](#fetchbyid) - Get custom workflow
* [delete](#delete) - Delete workflow

## get

Display workflows associated with a feature flag.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.workflows.get({
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
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { workflowsGet } from "@launchdarkly/mcp-server/funcs/workflowsGet.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await workflowsGet(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.GetWorkflowsRequest](../../models/operations/getworkflowsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomWorkflowsListingOutput](../../models/components/customworkflowslistingoutput.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## create

Create a workflow for a feature flag. You can create a workflow directly, or you can apply a template to create a new workflow.

### Creating a workflow

You can use the create workflow endpoint to create a workflow directly by adding a `stages` array to the request body.

For each stage, define the `name`, `conditions` when the stage should be executed, and `action` that describes the stage.

<details>
<summary>Click to expand example</summary>

_Example request body_
```json
{
  "name": "Progressive rollout starting in two days",
  "description": "Turn flag targeting on and increase feature rollout in 10% increments each day",
  "stages": [
    {
      "name": "10% rollout on day 1",
      "conditions": [
        {
          "kind": "schedule",
          "scheduleKind": "relative", // or "absolute"
              //  If "scheduleKind" is "absolute", set "executionDate";
              // "waitDuration" and "waitDurationUnit" will be ignored
          "waitDuration": 2,
          "waitDurationUnit": "calendarDay"
        },
        {
          "kind": "ld-approval",
          "notifyMemberIds": [ "507f1f77bcf86cd799439011" ],
          "notifyTeamKeys": [ "team-key-123abc" ]
        }
      ],
      "action": {
        "instructions": [
          {
            "kind": "turnFlagOn"
          },
          {
            "kind": "updateFallthroughVariationOrRollout",
            "rolloutWeights": {
              "452f5fb5-7320-4ba3-81a1-8f4324f79d49": 90000,
              "fc15f6a4-05d3-4aa4-a997-446be461345d": 10000
            }
          }
        ]
      }
    }
  ]
}
```
</details>

### Creating a workflow by applying a workflow template

You can also create a workflow by applying a workflow template. If you pass a valid workflow template key as the `templateKey` query parameter with the request, the API will attempt to create a new workflow with the stages defined in the workflow template with the corresponding key.

#### Applicability of stages
Templates are created in the context of a particular flag in a particular environment in a particular project. However, because workflows created from a template can be applied to any project, environment, and flag, some steps of the workflow may need to be updated in order to be applicable for the target resource.

You can pass a `dryRun` query parameter to tell the API to return a report of which steps of the workflow template are applicable in the target project/environment/flag, and which will need to be updated. When the `dryRun` query parameter is present the response body includes a `meta` property that holds a list of parameters that could potentially be inapplicable for the target resource. Each of these parameters will include a `valid` field. You will need to update any invalid parameters in order to create the new workflow. You can do this using the `parameters` property, which overrides the workflow template parameters.

#### Overriding template parameters
You can use the `parameters` property in the request body to tell the API to override the specified workflow template parameters with new values that are specific to your target project/environment/flag.

<details>
<summary>Click to expand example</summary>

_Example request body_
```json
{
	"name": "workflow created from my-template",
	"description": "description of my workflow",
	"parameters": [
		{
			"_id": "62cf2bc4cadbeb7697943f3b",
			"path": "/clauses/0/values",
			"default": {
				"value": ["updated-segment"]
			}
		},
		{
			"_id": "62cf2bc4cadbeb7697943f3d",
			"path": "/variationId",
			"default": {
				"value": "abcd1234-abcd-1234-abcd-1234abcd12"
			}
		}
	]
}
```
</details>

If there are any steps in the template that are not applicable to the target resource, the workflow will not be created, and the `meta` property will be included in the response body detailing which parameters need to be updated.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.workflows.create({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    customWorkflowInput: {
      name: "Progressive rollout starting in two days",
      description: "Turn flag on for 10% of customers each day",
      stages: [
        {
          name: "10% rollout on day 1",
          conditions: [
            {
              scheduleKind: "relative",
              waitDuration: 2,
              waitDurationUnit: "calendarDay",
              kind: "schedule",
            },
          ],
          action: {
            instructions: [
              {
                "kind": "turnFlagOn",
              },
              {
                "kind": "updateFallthroughVariationOrRollout",
                "rolloutWeights": {
                  "452f5fb5-7320-4ba3-81a1-8f4324f79d49": 90000,
                  "fc15f6a4-05d3-4aa4-a997-446be461345d": 10000,
                },
              },
            ],
          },
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
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { workflowsCreate } from "@launchdarkly/mcp-server/funcs/workflowsCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await workflowsCreate(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    customWorkflowInput: {
      name: "Progressive rollout starting in two days",
      description: "Turn flag on for 10% of customers each day",
      stages: [
        {
          name: "10% rollout on day 1",
          conditions: [
            {
              scheduleKind: "relative",
              waitDuration: 2,
              waitDurationUnit: "calendarDay",
              kind: "schedule",
            },
          ],
          action: {
            instructions: [
              {
                "kind": "turnFlagOn",
              },
              {
                "kind": "updateFallthroughVariationOrRollout",
                "rolloutWeights": {
                  "452f5fb5-7320-4ba3-81a1-8f4324f79d49": 90000,
                  "fc15f6a4-05d3-4aa4-a997-446be461345d": 10000,
                },
              },
            ],
          },
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
| `request`                                                                                                                                                                      | [operations.PostWorkflowRequest](../../models/operations/postworkflowrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomWorkflowOutput](../../models/components/customworkflowoutput.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## fetchById

Get a specific workflow by ID.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.workflows.fetchById({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    workflowId: "<value>",
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
import { workflowsFetchById } from "@launchdarkly/mcp-server/funcs/workflowsFetchById.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await workflowsFetchById(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    workflowId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetCustomWorkflowRequest](../../models/operations/getcustomworkflowrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomWorkflowOutput](../../models/components/customworkflowoutput.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## delete

Delete a workflow from a feature flag.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.workflows.delete({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    workflowId: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { workflowsDelete } from "@launchdarkly/mcp-server/funcs/workflowsDelete.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await workflowsDelete(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    workflowId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteWorkflowRequest](../../models/operations/deleteworkflowrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |