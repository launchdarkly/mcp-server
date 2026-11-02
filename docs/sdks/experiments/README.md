# Experiments

## Overview

> ### Available for subscription customers
>
> Experimentation is available to all customers on a Developer, Foundation, Enterprise, or Guardian plan. If you're on an older Pro or Enterprise plan, Experimentation is available as an add-on. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To change your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

Experimentation lets you validate the impact of features you roll out to your app or infrastructure. You can measure things like page views, clicks, load time, infrastructure costs, and more. By connecting metrics you create to flags in your LaunchDarkly environment, you can measure the changes in your customers' behavior based on what flags they evaluate. You can run experiments with any type of flag, including boolean, string, number, and JSON flags. To learn more, read [Experimentation](https://launchdarkly.com/docs/home/experimentation).

You can manage experiments by using the dedicated experiment endpoints described below.

Several of the endpoints require a treatment ID or a flag rule ID. Treatment IDs are returned as part of the expanded [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment#expanding-the-experiment-response) response. Winning treatment IDs are also returned as part of the [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response. They are the `winningTreatmentId` in the `currentIteration`, the `winningTreatmentId` in the `draftIteration`, and the `winningTreatmentId` in each element of the `previousIterations` array. In the flags object, the rule ID is the ID of the variation or rollout of the flag. Each flag variation ID is returned as part of the [Get feature flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) response. It is the `_id` field in each element of the `variations` array.


### Available Operations

* [list](#list) - Get experiments
* [create](#create) - Create experiment
* [get](#get) - Get experiment
* [patch](#patch) - Patch experiment
* [~~createIteration~~](#createiteration) - Create iteration :warning: **Deprecated**
* [getExperimentsAnyEnv](#getexperimentsanyenv) - Get experiments any environment

## list

Get details about all experiments in an environment.

### Filtering experiments

LaunchDarkly supports the `filter` query param for filtering, with the following fields:

- `flagKey` filters for only experiments that use the flag with the given key.
- `metricKey` filters for only experiments that use the metric with the given key.
- `status` filters for only experiments with an iteration with the given status. An iteration can have the status `not_started`, `running` or `stopped`.

For example, `filter=flagKey:my-flag,status:running,metricKey:page-load-ms` filters for experiments for the given flag key and the given metric key which have a currently running iteration.

### Expanding the experiments response

LaunchDarkly supports five fields for expanding the "Get experiments" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response.
- `draftIteration` includes the iteration which has not been started yet, if any.
- `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response.
- `treatments` includes all treatment and parameter details. By default treatment data is not included in the response.
- `analysisConfig` includes the analysis configuration for the experiment, such as the Bayesian threshold or significance threshold.

For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getExperiments" method="get" path="/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.list({
    projectKey: "<value>",
    environmentKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { experimentsList } from "@launchdarkly/mcp-server/funcs/experimentsList.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsList(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExperimentsRequest](../../models/operations/getexperimentsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ExperimentCollectionRep](../../models/components/experimentcollectionrep.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## create

Create an experiment.

To run this experiment, you'll need to [create an iteration](https://launchdarkly.com/docs/api/experiments/create-iteration) and then [update the experiment](https://launchdarkly.com/docs/api/experiments/patch-experiment) with the `startIteration` instruction.

### Experiment types

Use the `type` field to specify the experiment type: `experiment` (default), `mab` (multi-armed bandit), or `holdout`.

For multi-armed bandit experiments, set `reallocationFrequencyMillis` on the iteration to control how often traffic is reallocated across variations.

### Results analysis

Use the `methodology` field to specify the results analysis approach: `frequentist` (default) or `bayesian`. Multi-armed bandit experiments support only `bayesian`, which is their default.

Use the `dataSource` field to specify the source of metric data: `launchdarkly` (default), `snowflake`, or `databricks`.

Use the `analysisConfig` field to customize analysis settings such as the Bayesian threshold, significance threshold, or multiple comparison correction method.

To learn more, read [Creating experiments](https://launchdarkly.com/docs/home/experimentation/create).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createExperiment" method="post" path="/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.create({
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentPost: {
      name: "Example experiment",
      description: "An example experiment, used in testing",
      maintainerId: "12ab3c45de678910fgh12345",
      key: "experiment-key-123abc",
      iteration: {
        hypothesis: "Example hypothesis, the new button placement will increase conversion",
        canReshuffleTraffic: true,
        metrics: [
          {
            key: "metric-key-123abc",
            isGroup: true,
          },
          {
            key: "metric-key-123abc",
            isGroup: true,
          },
        ],
        primarySingleMetricKey: "metric-key-123abc",
        primaryFunnelKey: "metric-group-key-123abc",
        treatments: [
          {
            name: "Treatment 1",
            baseline: true,
            allocationPercent: "10",
            parameters: [
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
            ],
          },
          {
            name: "Treatment 1",
            baseline: true,
            allocationPercent: "10",
            parameters: [
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
            ],
          },
          {
            name: "Treatment 1",
            baseline: true,
            allocationPercent: "10",
            parameters: [
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
            ],
          },
        ],
        flags: {
          "key": {
            ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            flagConfigVersion: 12,
            notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          },
          "key1": {
            ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            flagConfigVersion: 12,
            notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          },
          "key2": {
            ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            flagConfigVersion: 12,
            notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          },
        },
        randomizationUnit: "user",
        reallocationFrequencyMillis: 3600000,
        attributes: [
          "country",
          "device",
          "os",
        ],
      },
      holdoutId: "f3b74309-d581-44e1-8a2b-bb2933b4fe40",
      methodology: "frequentist",
      analysisConfig: {
        bayesianThreshold: "10",
        significanceThreshold: "5",
        multipleComparisonCorrectionMethod: "bonferroni",
        multipleComparisonCorrectionScope: "variations",
      },
      dataSource: "snowflake",
      type: "experiment",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { experimentsCreate } from "@launchdarkly/mcp-server/funcs/experimentsCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsCreate(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentPost: {
      name: "Example experiment",
      description: "An example experiment, used in testing",
      maintainerId: "12ab3c45de678910fgh12345",
      key: "experiment-key-123abc",
      iteration: {
        hypothesis: "Example hypothesis, the new button placement will increase conversion",
        canReshuffleTraffic: true,
        metrics: [
          {
            key: "metric-key-123abc",
            isGroup: true,
          },
          {
            key: "metric-key-123abc",
            isGroup: true,
          },
        ],
        primarySingleMetricKey: "metric-key-123abc",
        primaryFunnelKey: "metric-group-key-123abc",
        treatments: [
          {
            name: "Treatment 1",
            baseline: true,
            allocationPercent: "10",
            parameters: [
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
            ],
          },
          {
            name: "Treatment 1",
            baseline: true,
            allocationPercent: "10",
            parameters: [
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
            ],
          },
          {
            name: "Treatment 1",
            baseline: true,
            allocationPercent: "10",
            parameters: [
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
              {
                flagKey: "example-flag-for-experiment",
                variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              },
            ],
          },
        ],
        flags: {
          "key": {
            ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            flagConfigVersion: 12,
            notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          },
          "key1": {
            ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            flagConfigVersion: 12,
            notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          },
          "key2": {
            ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            flagConfigVersion: 12,
            notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          },
        },
        randomizationUnit: "user",
        reallocationFrequencyMillis: 3600000,
        attributes: [
          "country",
          "device",
          "os",
        ],
      },
      holdoutId: "f3b74309-d581-44e1-8a2b-bb2933b4fe40",
      methodology: "frequentist",
      analysisConfig: {
        bayesianThreshold: "10",
        significanceThreshold: "5",
        multipleComparisonCorrectionMethod: "bonferroni",
        multipleComparisonCorrectionScope: "variations",
      },
      dataSource: "snowflake",
      type: "experiment",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateExperimentRequest](../../models/operations/createexperimentrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Experiment](../../models/components/experiment.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## get

Get details about an experiment.

### Expanding the experiment response

LaunchDarkly supports five fields for expanding the "Get experiment" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response.
- `draftIteration` includes the iteration which has not been started yet, if any.
- `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response.
- `treatments` includes all treatment and parameter details. By default treatment data is not included in the response.
- `analysisConfig` includes the analysis configuration for the experiment, such as the Bayesian threshold or significance threshold.

For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getExperiment" method="get" path="/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.get({
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { experimentsGet } from "@launchdarkly/mcp-server/funcs/experimentsGet.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsGet(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExperimentRequest](../../models/operations/getexperimentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Experiment](../../models/components/experiment.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## patch

Update an experiment. Updating an experiment uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating experiments.

#### updateName

> **Deprecated**: `updateName` will be removed in a future version. Use `updateExperimentFields` instead.

Updates the experiment name.

##### Parameters

- `value`: The new name.

Here's an example:

```json
{
  "instructions": [{
    "kind": "updateName",
    "value": "Example updated experiment name"
  }]
}
```

#### updateDescription

> **Deprecated**: `updateDescription` will be removed in a future version. Use `updateExperimentFields` instead.

Updates the experiment description.

##### Parameters

- `value`: The new description.

Here's an example:

```json
{
  "instructions": [{
    "kind": "updateDescription",
    "value": "Example updated description"
  }]
}
```

#### updateExperimentFields

Updates one or more fields on an experiment or its current iteration. Each field update specifies an operation (`add`, `update`, or `remove`) and an optional value.

Which fields are mutable depends on the current iteration status. To discover which fields and operations are allowed, expand `mutableFieldsByStatus` on the [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response.

##### Parameters

- `value`: An object mapping field names to field updates. Each field update has the following properties:
  - `operation`: The operation to perform. One of `add`, `update`, or `remove`.
  - `value`: The new value for the field. Required for `add` and `update` operations.

To find which fields are supported and which operations are allowed for each iteration status, expand `mutableFieldsByStatus` on the [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response.

Here's an example:

```json
{
  "instructions": [{
    "kind": "updateExperimentFields",
    "value": {
      "name": {
        "operation": "update",
        "value": "Updated experiment name"
      },
      "tags": {
        "operation": "add",
        "value": ["tag1", "tag2"]
      }
    }
  }]
}
```

#### saveAndStartNewIteration

Stops the current running iteration, creates a new iteration from it, optionally applies field updates, and starts the new iteration. This is a convenience instruction that combines stopping, updating, and starting in a single operation.

##### Parameters

- `changeJustification`: (Optional) The reason for stopping and starting a new iteration.
- `value`: (Optional) An object mapping field names to field updates, using the same format as `updateExperimentFields`. These updates are applied to the new iteration before it is started.

Here's an example:

```json
{
  "instructions": [{
    "kind": "saveAndStartNewIteration",
    "changeJustification": "Adjusting hypothesis based on early results",
    "value": {
      "hypothesis": {
        "operation": "update",
        "value": "Updated hypothesis text"
      }
    }
  }]
}
```

#### startIteration

Starts a new iteration for this experiment. You must [create a new iteration](https://launchdarkly.com/docs/api/experiments/create-iteration) before calling this instruction.

An iteration may not be started until it meets the following criteria:

* Its associated flag is toggled on and is not archived
* Its `randomizationUnit` is set
* At least one of its `treatments` has a non-zero `allocationPercent`

##### Parameters

- `changeJustification`: The reason for starting a new iteration. Required when you call `startIteration` on an already running experiment, otherwise optional.

Here's an example:

```json
{
  "instructions": [{
    "kind": "startIteration",
    "changeJustification": "It's time to start a new iteration"
  }]
}
```

#### stopIteration

Stops the current iteration for this experiment.

##### Parameters

- `winningTreatmentId`: The ID of the winning treatment. Treatment IDs are returned as part of the [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response. They are the `_id` of each element in the `treatments` array.
- `winningReason`: The reason for the winner

Here's an example:

```json
{
  "instructions": [{
    "kind": "stopIteration",
    "winningTreatmentId": "3a548ec2-72ac-4e59-8518-5c24f5609ccf",
    "winningReason": "Example reason to stop the iteration"
  }]
}
```

#### archiveExperiment

Archives this experiment. Archived experiments are hidden by default in the LaunchDarkly user interface. You cannot start new iterations for archived experiments.

Here's an example:

```json
{
  "instructions": [{ "kind": "archiveExperiment" }]
}
```

#### restoreExperiment

Restores an archived experiment. After restoring an experiment, you can start new iterations for it again.

Here's an example:

```json
{
  "instructions": [{ "kind": "restoreExperiment" }]
}
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchExperiment" method="patch" path="/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.patch({
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
    experimentPatchInput: {
      comment: "Example comment describing the update",
      instructions: [
        {
          "kind": "updateName",
          "value": "Updated experiment name",
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { experimentsPatch } from "@launchdarkly/mcp-server/funcs/experimentsPatch.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsPatch(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
    experimentPatchInput: {
      comment: "Example comment describing the update",
      instructions: [
        {
          "kind": "updateName",
          "value": "Updated experiment name",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentsPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchExperimentRequest](../../models/operations/patchexperimentrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Experiment](../../models/components/experiment.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.PatchFailedErrorRep    | 422                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## ~~createIteration~~

> **Deprecated**: This endpoint will be removed in a future version. Use the `updateExperimentFields` and `saveAndStartNewIteration` instructions on [Update experiment](https://launchdarkly.com/docs/api/experiments/patch-experiment) instead.

Create an experiment iteration.

Experiment iterations let you record experiments in individual blocks of time. Initially, iterations are created with a status of `not_started` and appear in the `draftIteration` field of an experiment. To start or stop an iteration, [update the experiment](https://launchdarkly.com/docs/api/experiments/patch-experiment) with the `startIteration` or `stopIteration` instruction.

To learn more, read [Start experiment iterations](https://launchdarkly.com/docs/home/experimentation/create#start-an-experiment-iteration).


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createIteration" method="post" path="/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.createIteration({
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
    iterationInput: {
      hypothesis: "Example hypothesis, the new button placement will increase conversion",
      canReshuffleTraffic: true,
      metrics: [
        {
          key: "metric-key-123abc",
          isGroup: true,
        },
      ],
      primarySingleMetricKey: "metric-key-123abc",
      primaryFunnelKey: "metric-group-key-123abc",
      treatments: [
        {
          name: "Treatment 1",
          baseline: true,
          allocationPercent: "10",
          parameters: [
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
          ],
        },
        {
          name: "Treatment 1",
          baseline: true,
          allocationPercent: "10",
          parameters: [
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
          ],
        },
      ],
      flags: {
        "key": {
          ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          flagConfigVersion: 12,
          notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
        },
        "key1": {
          ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          flagConfigVersion: 12,
          notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
        },
      },
      randomizationUnit: "user",
      reallocationFrequencyMillis: 3600000,
      attributes: [
        "country",
        "device",
        "os",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { experimentsCreateIteration } from "@launchdarkly/mcp-server/funcs/experimentsCreateIteration.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsCreateIteration(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
    iterationInput: {
      hypothesis: "Example hypothesis, the new button placement will increase conversion",
      canReshuffleTraffic: true,
      metrics: [
        {
          key: "metric-key-123abc",
          isGroup: true,
        },
      ],
      primarySingleMetricKey: "metric-key-123abc",
      primaryFunnelKey: "metric-group-key-123abc",
      treatments: [
        {
          name: "Treatment 1",
          baseline: true,
          allocationPercent: "10",
          parameters: [
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
          ],
        },
        {
          name: "Treatment 1",
          baseline: true,
          allocationPercent: "10",
          parameters: [
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
            {
              flagKey: "example-flag-for-experiment",
              variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            },
          ],
        },
      ],
      flags: {
        "key": {
          ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          flagConfigVersion: 12,
          notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
        },
        "key1": {
          ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          flagConfigVersion: 12,
          notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
        },
      },
      randomizationUnit: "user",
      reallocationFrequencyMillis: 3600000,
      attributes: [
        "country",
        "device",
        "os",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentsCreateIteration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIterationRequest](../../models/operations/createiterationrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IterationRep](../../models/components/iterationrep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getExperimentsAnyEnv

Get a list of experiments from across all environments in the project

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getExperimentsAnyEnv" method="get" path="/api/v2/projects/{projectKey}/experiments" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.getExperimentsAnyEnv({
    projectKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { experimentsGetExperimentsAnyEnv } from "@launchdarkly/mcp-server/funcs/experimentsGetExperimentsAnyEnv.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsGetExperimentsAnyEnv(launchDarkly, {
    projectKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentsGetExperimentsAnyEnv failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExperimentsAnyEnvRequest](../../models/operations/getexperimentsanyenvrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ExperimentCollectionRep](../../models/components/experimentcollectionrep.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |