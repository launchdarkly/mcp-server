# Layers
(*layers*)

## Overview

> ### Available for customers using Experimentation
>
> Layers are available to customers using [Experimentation](https://launchdarkly.com/docs/api/experiments).

There are some cases in which you may not want to include a context in more than one experiment at a time. For example, you may be concerned about collisions between experiments that are testing similar parts of your app, like two different changes to the same section of your app's user interface (UI), or experiments running on both the back end and front end of the same functionality. In this case you can eliminate the interaction effect between experiments using layers.

A layer contains a set of experiments that cannot share traffic with each other. All of the experiments within a layer are mutually exclusive, which means that if a context is included in one experiment, LaunchDarkly will exclude it from any other experiments in the same layer.

To learn more, read [Mutually exclusive experiments](https://launchdarkly.com/docs/home/experimentation/mutually-exclusive).


### Available Operations

* [list](#list) - Get layers
* [create](#create) - Create layer
* [update](#update) - Update layer

## list

Get a collection of all layers for a project

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.layers.list({
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
import { layersList } from "@launchdarkly/mcp-server/funcs/layersList.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await layersList(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.GetLayersRequest](../../models/operations/getlayersrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LayerCollectionRep](../../models/components/layercollectionrep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## create

Create a layer. Experiments running in the same layer are granted mutually-exclusive traffic.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.layers.create({
    projectKey: "<value>",
    layerPost: {
      key: "checkout-flow",
      name: "Checkout Flow",
      description: "unlike well fess usefully boiling",
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
import { layersCreate } from "@launchdarkly/mcp-server/funcs/layersCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await layersCreate(launchDarkly, {
    projectKey: "<value>",
    layerPost: {
      key: "checkout-flow",
      name: "Checkout Flow",
      description: "unlike well fess usefully boiling",
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
| `request`                                                                                                                                                                      | [operations.CreateLayerRequest](../../models/operations/createlayerrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LayerRep](../../models/components/layerrep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## update

Update a layer by adding, changing, or removing traffic reservations for experiments, or by changing layer name or description.
Updating a layer uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating layers.

<details>
<summary>Click to expand instructions for <strong>updating layers</strong></summary>

#### updateName

Updates the layer name.

##### Parameters

- `name`: The new layer name.

Here's an example:

```json
{
  "instructions": [{
      "kind": "updateName",
      "name": "New name"
  }]
}
```

#### updateDescription

Updates the layer description.

##### Parameters

- `description`: The new description.

Here's an example:

```json
{
  "instructions": [{
      "kind": "updateDescription",
      "description": "New description"
  }]
}
```

#### updateExperimentReservation

Adds or updates a traffic reservation for an experiment in a layer.

##### Parameters

- `experimentKey`: The key of the experiment whose reservation you are adding to or updating in the layer.
- `reservationPercent`: The amount of traffic in the layer to reserve. Must be an integer. Zero is allowed until iteration start.

Here's an example:

```json
{
  "environmentKey": "production",
  "instructions": [{
      "kind": "updateExperimentReservation",
      "experimentKey": "exp-key",
      "reservationPercent": 10
  }]
}
```

#### removeExperiment

Removes a traffic reservation for an experiment from a layer.

##### Parameters

- `experimentKey`: The key of the experiment whose reservation you want to remove from the layer.

Here's an example:

```json
{
  "environmentKey": "production",
  "instructions": [{
      "kind": "removeExperiment",
      "experimentKey": "exp-key"
  }]
}
```

</details>


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.layers.update({
    projectKey: "<value>",
    layerKey: "<value>",
    layerPatchInput: {
      comment: "Example comment describing the update",
      environmentKey: "production",
      instructions: [
        {
          "experimentKey": "checkout-button-color",
          "kind": "updateExperimentReservation",
          "reservationPercent": 25,
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
import { layersUpdate } from "@launchdarkly/mcp-server/funcs/layersUpdate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await layersUpdate(launchDarkly, {
    projectKey: "<value>",
    layerKey: "<value>",
    layerPatchInput: {
      comment: "Example comment describing the update",
      environmentKey: "production",
      instructions: [
        {
          "experimentKey": "checkout-button-color",
          "kind": "updateExperimentReservation",
          "reservationPercent": 25,
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
| `request`                                                                                                                                                                      | [operations.UpdateLayerRequest](../../models/operations/updatelayerrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LayerRep](../../models/components/layerrep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |