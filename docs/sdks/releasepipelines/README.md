# ReleasePipelines
(*releasePipelines*)

## Overview

### Available Operations

* [getAll](#getall) - Get all release pipelines
* [create](#create) - Create a release pipeline
* [getByKey](#getbykey) - Get release pipeline by key
* [update](#update) - Update a release pipeline
* [delete](#delete) - Delete release pipeline
* [getAllReleaseProgressions](#getallreleaseprogressions) - Get release progressions for release pipeline

## getAll

Get all release pipelines for a project.

### Filtering release pipelines

LaunchDarkly supports the following fields for filters:

- `query` is a string that matches against the release pipeline `key`, `name`, and `description`. It is not case sensitive. For example: `?filter=query:examplePipeline`.

- `env` is a string that matches an environment key. For example: `?filter=env:production`.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.releasePipelines.getAll({
    projectKey: "<value>",
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
import { releasePipelinesGetAll } from "@launchdarkly/mcp-server/funcs/releasePipelinesGetAll.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesGetAll(launchDarkly, {
    projectKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetAllReleasePipelinesRequest](../../models/operations/getallreleasepipelinesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ReleasePipelineCollection](../../models/components/releasepipelinecollection.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.NotFoundErrorRep | 404                     | application/json        |
| errors.APIError         | 4XX, 5XX                | \*/\*                   |

## create

Creates a new release pipeline.

The first release pipeline you create is automatically set as the default release pipeline for your project. To change the default release pipeline, use the [Update project](https://launchdarkly.com/docs/ld-docs/api/projects/patch-project) API to set the `defaultReleasePipelineKey`.

You can create up to 20 release pipelines per project.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.releasePipelines.create({
    projectKey: "<value>",
    createReleasePipelineInput: {
      description: "Standard pipeline to roll out to production",
      key: "standard-pipeline",
      name: "Standard Pipeline",
      phases: [],
      tags: [
        "example-tag",
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
import { releasePipelinesCreate } from "@launchdarkly/mcp-server/funcs/releasePipelinesCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesCreate(launchDarkly, {
    projectKey: "<value>",
    createReleasePipelineInput: {
      description: "Standard pipeline to roll out to production",
      key: "standard-pipeline",
      name: "Standard Pipeline",
      phases: [],
      tags: [
        "example-tag",
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
| `request`                                                                                                                                                                      | [operations.PostReleasePipelineRequest](../../models/operations/postreleasepipelinerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ReleasePipeline](../../models/components/releasepipeline.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getByKey

Get a release pipeline by key

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.releasePipelines.getByKey({
    projectKey: "<value>",
    pipelineKey: "<value>",
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
import { releasePipelinesGetByKey } from "@launchdarkly/mcp-server/funcs/releasePipelinesGetByKey.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesGetByKey(launchDarkly, {
    projectKey: "<value>",
    pipelineKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetReleasePipelineByKeyRequest](../../models/operations/getreleasepipelinebykeyrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ReleasePipeline](../../models/components/releasepipeline.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.NotFoundErrorRep | 404                     | application/json        |
| errors.APIError         | 4XX, 5XX                | \*/\*                   |

## update

Updates a release pipeline.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.releasePipelines.update({
    projectKey: "<value>",
    pipelineKey: "<value>",
    updateReleasePipelineInput: {
      description: "Standard pipeline to roll out to production",
      name: "Standard Pipeline",
      phases: [
        {
          audiences: [
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
          ],
          name: "Phase 1 - Testing",
        },
        {
          audiences: [
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
          ],
          name: "Phase 1 - Testing",
        },
        {
          audiences: [
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
          ],
          name: "Phase 1 - Testing",
        },
      ],
      tags: [
        "example-tag",
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
import { releasePipelinesUpdate } from "@launchdarkly/mcp-server/funcs/releasePipelinesUpdate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesUpdate(launchDarkly, {
    projectKey: "<value>",
    pipelineKey: "<value>",
    updateReleasePipelineInput: {
      description: "Standard pipeline to roll out to production",
      name: "Standard Pipeline",
      phases: [
        {
          audiences: [
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
          ],
          name: "Phase 1 - Testing",
        },
        {
          audiences: [
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
          ],
          name: "Phase 1 - Testing",
        },
        {
          audiences: [
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
            {
              environmentKey: "<value>",
              name: "<value>",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
            },
          ],
          name: "Phase 1 - Testing",
        },
      ],
      tags: [
        "example-tag",
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
| `request`                                                                                                                                                                      | [operations.PutReleasePipelineRequest](../../models/operations/putreleasepipelinerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ReleasePipeline](../../models/components/releasepipeline.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## delete

Deletes a release pipeline.

You cannot delete the default release pipeline.

If you want to delete a release pipeline that is currently the default, create a second release pipeline and set it as the default. Then delete the first release pipeline. To change the default release pipeline, use the [Update project](https://launchdarkly.com/docs/ld-docs/api/projects/patch-project) API to set the `defaultReleasePipelineKey`.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.releasePipelines.delete({
    projectKey: "<value>",
    pipelineKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { releasePipelinesDelete } from "@launchdarkly/mcp-server/funcs/releasePipelinesDelete.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesDelete(launchDarkly, {
    projectKey: "<value>",
    pipelineKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteReleasePipelineRequest](../../models/operations/deletereleasepipelinerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ForbiddenErrorRep | 403                      | application/json         |
| errors.NotFoundErrorRep  | 404                      | application/json         |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |

## getAllReleaseProgressions

Get details on the progression of all releases, across all flags, for a release pipeline

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.releasePipelines.getAllReleaseProgressions({
    projectKey: "<value>",
    pipelineKey: "<value>",
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
import { releasePipelinesGetAllReleaseProgressions } from "@launchdarkly/mcp-server/funcs/releasePipelinesGetAllReleaseProgressions.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesGetAllReleaseProgressions(launchDarkly, {
    projectKey: "<value>",
    pipelineKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetAllReleaseProgressionsForReleasePipelineRequest](../../models/operations/getallreleaseprogressionsforreleasepipelinerequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ReleaseProgressionCollection](../../models/components/releaseprogressioncollection.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.NotFoundErrorRep | 404                     | application/json        |
| errors.APIError         | 4XX, 5XX                | \*/\*                   |