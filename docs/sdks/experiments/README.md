# Experiments
(*experiments*)

## Overview

> ### Available for subscription customers
>
> Experimentation is available to all customers on a Developer, Foundation, or Enterprise subscription. If you're on an older Pro or Enterprise plan, Experimentation is available as an add-on. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To change your plan, [contact Sales](https://launchdarkly.com/contact-sales/).


> ### This feature is in beta
>
> To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](https://launchdarkly.com/docs/api#beta-resources).
>
> Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.

Experimentation lets you validate the impact of features you roll out to your app or infrastructure. You can measure things like page views, clicks, load time, infrastructure costs, and more. By connecting metrics you create to flags in your LaunchDarkly environment, you can measure the changes in your customers' behavior based on what flags they evaluate. You can run experiments with any type of flag, including boolean, string, number, and JSON flags. To learn more, read [Experimentation](https://launchdarkly.com/docs/home/experimentation).

You can manage experiments by using the dedicated experiment endpoints described below.

Several of the endpoints require a treatment ID or a flag rule ID. Treatment IDs are returned as part of the [Get experiment results](https://launchdarkly.com/docs/api/experiments/get-experiment-results) response. They are the `treatmentId` of each element in the `treatmentResults` array. Winning treatment IDs are also returned as part of the [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response. They are the `winningTreatmentId` in the `currentIteration`, the `winningTreatmentId` in the `draftIteration`, and the `winningTreatmentId` in each element of the `previousIterations` array. In the flags object, the rule ID is the ID of the variation or rollout of the flag. Each flag variation ID is returned as part of the [Get feature flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) response. It is the `_id` field in each element of the `variations` array.


### Available Operations

* [list](#list) - Get experiments
* [create](#create) - Create experiment
* [get](#get) - Get experiment
* [patch](#patch) - Patch experiment
* [createIteration](#createiteration) - Create iteration
* [~~getResultsForMetricGroup~~](#getresultsformetricgroup) - Get experiment results for metric group (Deprecated) :warning: **Deprecated**
* [~~getResults~~](#getresults) - Get experiment results (Deprecated) :warning: **Deprecated**
* [getSettings](#getsettings) - Get experimentation settings
* [updateSettings](#updatesettings) - Update experimentation settings

## list

Get details about all experiments in an environment.

### Filtering experiments

LaunchDarkly supports the `filter` query param for filtering, with the following fields:

- `flagKey` filters for only experiments that use the flag with the given key.
- `metricKey` filters for only experiments that use the metric with the given key.
- `status` filters for only experiments with an iteration with the given status. An iteration can have the status `not_started`, `running` or `stopped`.

For example, `filter=flagKey:my-flag,status:running,metricKey:page-load-ms` filters for experiments for the given flag key and the given metric key which have a currently running iteration.

### Expanding the experiments response

LaunchDarkly supports four fields for expanding the "Get experiments" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response.
- `draftIteration` includes the iteration which has not been started yet, if any.
- `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response.
- `treatments` includes all treatment and parameter details. By default treatment data is not included in the response.

For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.


### Example Usage

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

  // Handle the result
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

To run this experiment, you'll need to [create an iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration) and then [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment) with the `startIteration` instruction.

To learn more, read [Creating experiments](https://launchdarkly.com/docs/home/experimentation/create).


### Example Usage

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
        attributes: [
          "country",
          "device",
          "os",
        ],
      },
      holdoutId: "f3b74309-d581-44e1-8a2b-bb2933b4fe40",
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
        attributes: [
          "country",
          "device",
          "os",
        ],
      },
      holdoutId: "f3b74309-d581-44e1-8a2b-bb2933b4fe40",
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

LaunchDarkly supports four fields for expanding the "Get experiment" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response.
- `draftIteration` includes the iteration which has not been started yet, if any.
- `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response.
- `treatments` includes all treatment and parameter details. By default treatment data is not included in the response.

For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.


### Example Usage

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

  // Handle the result
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

#### startIteration

Starts a new iteration for this experiment. You must [create a new iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration) before calling this instruction.

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

- `winningTreatmentId`: The ID of the winning treatment. Treatment IDs are returned as part of the [Get experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/get-experiment) response. They are the `_id` of each element in the `treatments` array.
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

  // Handle the result
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
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## createIteration

Create an experiment iteration.

Experiment iterations let you record experiments in individual blocks of time. Initially, iterations are created with a status of `not_started` and appear in the `draftIteration` field of an experiment. To start or stop an iteration, [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment) with the `startIteration` or `stopIteration` instruction. 

To learn more, read [Start experiment iterations](https://launchdarkly.com/docs/home/experimentation/feature#start-experiment-iterations).


### Example Usage

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
      attributes: [
        "country",
        "device",
        "os",
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
      attributes: [
        "country",
        "device",
        "os",
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

## ~~getResultsForMetricGroup~~

Get results from an experiment for a particular metric group.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.getResultsForMetricGroup({
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
    metricGroupKey: "<value>",
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
import { experimentsGetResultsForMetricGroup } from "@launchdarkly/mcp-server/funcs/experimentsGetResultsForMetricGroup.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsGetResultsForMetricGroup(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
    metricGroupKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetExperimentResultsForMetricGroupRequest](../../models/operations/getexperimentresultsformetricgrouprequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetricGroupResultsRep](../../models/components/metricgroupresultsrep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## ~~getResults~~

Get results from an experiment for a particular metric.

LaunchDarkly supports one field for expanding the "Get experiment results" response. By default, this field is **not** included in the response.

To expand the response, append the `expand` query parameter with the following field:
* `traffic` includes the total count of units for each treatment.

For example, `expand=traffic` includes the `traffic` field for the project in the response.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.getResults({
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
    metricKey: "<value>",
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
import { experimentsGetResults } from "@launchdarkly/mcp-server/funcs/experimentsGetResults.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsGetResults(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    experimentKey: "<value>",
    metricKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetExperimentResultsRequest](../../models/operations/getexperimentresultsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ExperimentBayesianResultsRep](../../models/components/experimentbayesianresultsrep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getSettings

Get current experimentation settings for the given project

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.getSettings({
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
import { experimentsGetSettings } from "@launchdarkly/mcp-server/funcs/experimentsGetSettings.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsGetSettings(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.GetExperimentationSettingsRequest](../../models/operations/getexperimentationsettingsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RandomizationSettingsRep](../../models/components/randomizationsettingsrep.md)\>**

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

## updateSettings

Update experimentation settings for the given project

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.experiments.updateSettings({
    projectKey: "<value>",
    randomizationSettingsPut: {
      randomizationUnits: [
        {
          randomizationUnit: "user",
          default: true,
          standardRandomizationUnit: "organization",
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
import { experimentsUpdateSettings } from "@launchdarkly/mcp-server/funcs/experimentsUpdateSettings.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await experimentsUpdateSettings(launchDarkly, {
    projectKey: "<value>",
    randomizationSettingsPut: {
      randomizationUnits: [
        {
          randomizationUnit: "user",
          default: true,
          standardRandomizationUnit: "organization",
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
| `request`                                                                                                                                                                      | [operations.PutExperimentationSettingsRequest](../../models/operations/putexperimentationsettingsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RandomizationSettingsRep](../../models/components/randomizationsettingsrep.md)\>**

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