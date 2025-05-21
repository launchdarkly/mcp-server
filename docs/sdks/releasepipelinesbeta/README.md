# ReleasePipelinesBeta
(*releasePipelinesBeta*)

## Overview

> ### This feature is in beta
>
> To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](https://launchdarkly.com/docs/api#beta-resources).
>
> Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.

Release pipelines standardize the release process for feature flags across a series of phases, where each phase consists of one or more environments. When you add a flag to a release pipeline, you create a "release" to automate that flag's progress through the pipeline.

You can use release pipelines to ensure that you correctly roll out the flag in each environment before moving on to the next. A release can use an immediate or guarded rollout to a designated audience, and can require approvals for selected environments. You can also use release pipelines to view the status of ongoing releases across all flags within a project, enforcing a standardized process and ensuring they are following best practices. To learn more, read [Release pipelines](https://launchdarkly.com/docs/home/releases/release-pipelines).

With the release pipelines API, you can view, create, update, and delete release pipelines.

With the related [releases API](https://launchdarkly.com/docs/api/releases-beta), you can view and update the active releases for a given flag.

To add a feature flag to an existing release pipeline, use the [Update feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag) endpoint.


### Available Operations

* [getAllReleasePipelines](#getallreleasepipelines) - Get all release pipelines
* [postReleasePipeline](#postreleasepipeline) - Create a release pipeline
* [getReleasePipelineByKey](#getreleasepipelinebykey) - Get release pipeline by key
* [putReleasePipeline](#putreleasepipeline) - Update a release pipeline
* [deleteReleasePipeline](#deletereleasepipeline) - Delete release pipeline
* [getAllReleaseProgressionsForReleasePipeline](#getallreleaseprogressionsforreleasepipeline) - Get release progressions for release pipeline

## getAllReleasePipelines

Get all release pipelines for a project.

### Filtering release pipelines

LaunchDarkly supports the following fields for filters:

- `query` is a string that matches against the release pipeline `key`, `name`, and `description`. It is not case sensitive. For example: `?filter=query:examplePipeline`.

- `env` is a string that matches an environment key. For example: `?filter=env:production`.


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.releasePipelinesBeta.getAllReleasePipelines({
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { releasePipelinesBetaGetAllReleasePipelines } from "@launchdarkly/mcp-server/funcs/releasePipelinesBetaGetAllReleasePipelines.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesBetaGetAllReleasePipelines(launchdarklyMcpServer, {
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

**Promise\<[models.ReleasePipelineCollection](../../models/releasepipelinecollection.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.NotFoundErrorRep | 404                     | application/json        |
| errors.APIError         | 4XX, 5XX                | \*/\*                   |

## postReleasePipeline

Creates a new release pipeline.

The first release pipeline you create is automatically set as the default release pipeline for your project. To change the default release pipeline, use the [Update project](https://launchdarkly.com/docs/ld-docs/api/projects/patch-project) API to set the `defaultReleasePipelineKey`.

You can create up to 20 release pipelines per project.


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.releasePipelinesBeta.postReleasePipeline({
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { releasePipelinesBetaPostReleasePipeline } from "@launchdarkly/mcp-server/funcs/releasePipelinesBetaPostReleasePipeline.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesBetaPostReleasePipeline(launchdarklyMcpServer, {
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

**Promise\<[models.ReleasePipeline](../../models/releasepipeline.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getReleasePipelineByKey

Get a release pipeline by key

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.releasePipelinesBeta.getReleasePipelineByKey({
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { releasePipelinesBetaGetReleasePipelineByKey } from "@launchdarkly/mcp-server/funcs/releasePipelinesBetaGetReleasePipelineByKey.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesBetaGetReleasePipelineByKey(launchdarklyMcpServer, {
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

**Promise\<[models.ReleasePipeline](../../models/releasepipeline.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.NotFoundErrorRep | 404                     | application/json        |
| errors.APIError         | 4XX, 5XX                | \*/\*                   |

## putReleasePipeline

Updates a release pipeline.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.releasePipelinesBeta.putReleasePipeline({
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { releasePipelinesBetaPutReleasePipeline } from "@launchdarkly/mcp-server/funcs/releasePipelinesBetaPutReleasePipeline.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesBetaPutReleasePipeline(launchdarklyMcpServer, {
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

**Promise\<[models.ReleasePipeline](../../models/releasepipeline.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## deleteReleasePipeline

Deletes a release pipeline.

You cannot delete the default release pipeline.

If you want to delete a release pipeline that is currently the default, create a second release pipeline and set it as the default. Then delete the first release pipeline. To change the default release pipeline, use the [Update project](https://launchdarkly.com/docs/ld-docs/api/projects/patch-project) API to set the `defaultReleasePipelineKey`.


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.releasePipelinesBeta.deleteReleasePipeline({
    projectKey: "<value>",
    pipelineKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { releasePipelinesBetaDeleteReleasePipeline } from "@launchdarkly/mcp-server/funcs/releasePipelinesBetaDeleteReleasePipeline.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesBetaDeleteReleasePipeline(launchdarklyMcpServer, {
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

## getAllReleaseProgressionsForReleasePipeline

Get details on the progression of all releases, across all flags, for a release pipeline

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.releasePipelinesBeta.getAllReleaseProgressionsForReleasePipeline({
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { releasePipelinesBetaGetAllReleaseProgressionsForReleasePipeline } from "@launchdarkly/mcp-server/funcs/releasePipelinesBetaGetAllReleaseProgressionsForReleasePipeline.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await releasePipelinesBetaGetAllReleaseProgressionsForReleasePipeline(launchdarklyMcpServer, {
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

**Promise\<[models.ReleaseProgressionCollection](../../models/releaseprogressioncollection.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.NotFoundErrorRep | 404                     | application/json        |
| errors.APIError         | 4XX, 5XX                | \*/\*                   |