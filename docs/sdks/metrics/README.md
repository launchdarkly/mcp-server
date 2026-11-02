# Metrics

## Overview

Metrics track flag behavior over time when an experiment is running. The data generated from experiments gives you more insight into the impact of a particular flag. To learn more, read [Metrics](https://launchdarkly.com/docs/home/observability/metrics).

Using the metrics API, you can create, delete, and manage metrics.

> ### Metric keys and event keys are different
>
> LaunchDarkly automatically generates a metric key when you create a metric. You can use the metric key to identify the metric in API calls.
>
> Custom conversion/binary and custom numeric metrics also require an event key. You can set the event key to anything you want. Adding this event key to your codebase lets your SDK track actions customers take in your app as events. To learn more, read [Sending custom events](https://launchdarkly.com/docs/sdk/features/events).

### Importing metric events

The metric import API is separate from the metrics API.

The metric import API lets you import metric events from your data pipeline for use with Experimentation and guarded rollouts. This means you can send your already-instrumented metrics into LaunchDarkly without writing and deploying new code for each metric.

For details on the metric import API, read [Importing metric events](https://launchdarkly.com/docs/home/observability/import-events).

> #### The metric import API uses a different base URL
>
> The metric import API differs from other LaunchDarkly REST APIs because it uses a different base URL: it requires `https://events.launchdarkly.com` rather than `https://app.launchdarkly.com`. For this reason, the metric import API is also not included as part of LaunchDarkly's [generated client libraries](https://launchdarkly.com/docs/api#openapi-swagger-and-client-libraries), and details are not included in the [OpenAPI specification](https://launchdarkly.com/docs/api/other/get-openapi-spec). To learn more, read [Importing metric events](https://launchdarkly.com/docs/home/observability/import-events).


### Available Operations

* [list](#list) - List metrics
* [create](#create) - Create metric
* [get](#get) - Get metric
* [patch](#patch) - Update metric

## list

Get a list of all metrics for the specified project.

### Filtering metrics

The `filter` parameter supports the following operators: `contains`, `equals`, `anyOf`.

#### Supported fields and operators

You can only filter certain fields in metrics when using the `filter` parameter. Additionally, you can only filter some fields with certain operators.

When you search for metrics, the `filter` parameter supports the following fields and operators:

|<div style="width:120px">Field</div> |Description |Supported operators |
|---|---|---|
| `dataSourceKeys` | The data source that provides events for this metric (for example, "launchdarkly-hosted"). | `anyOf`, `notEquals` |
| `eventKeys` | The metric event key. | `anyOf` |
| `eventKind` | The metric event kind. One of `custom`, `pageview`, `click`. | `equals` |
| `hasConnections` | Whether the metric has connections to experiments or guarded rollouts. One of `true`, `false`. | `equals` |
| `isNumeric` | Whether the metric is numeric. One of `true`, `false`. | `equals` |
| `maintainerIds` | A comma-separated list of metric maintainer IDs. | `anyOf` |
| `maintainerTeamKey` | The metric maintainer team key. | `equals` |
| `metricUsedIn` | Filter by where the metric is used. One of `experiments`, `guarded_rollouts`, `any`, `none`. | `equals` |
| `query` | A "fuzzy" search across metric key and name. Supply a string or list of strings to the operator. | `equals` |
| `tags` | The metric tags. | `contains` |
| `unitAggregationType` | The metric's unit aggregation type. One of `sum`, `average`. | `equals` |
| `versionIds` | The metric version number. | `anyOf` |
| `view` | The view used to restrict access to the metric. | `equals` |

For example, the filter `?filter=tags contains ["tag1", "tag2", "tag3"]` matches metrics that have all three tags.

The documented values for `filter` query parameters are prior to URL encoding. For example, the `[` in `?filter=tags contains ["tag1", "tag2", "tag3"]` must be encoded to `%5B`.

### Expanding the metric list response

LaunchDarkly supports expanding the "List metrics" response. By default, the expandable field is **not** included in the response.

To expand the response, append the `expand` query parameter and add the following supported field:

- `experimentCount` includes the number of experiments from the specific project that use the metric

For example, `expand=experimentCount` includes the `experimentCount` field for each metric in the response.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetrics" method="get" path="/api/v2/metrics/{projectKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.metrics.list({
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
import { metricsList } from "@launchdarkly/mcp-server/funcs/metricsList.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await metricsList(launchDarkly, {
    projectKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetricsRequest](../../models/operations/getmetricsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetricCollectionRep](../../models/components/metriccollectionrep.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## create

Create a new metric in the specified project. The expected `POST` body differs depending on the specified `kind` property.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="postMetric" method="post" path="/api/v2/metrics/{projectKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.metrics.create({
    projectKey: "<value>",
    metricPost: {
      key: "metric-key-123abc",
      kind: "custom",
      isNumeric: false,
      eventKey: "Order placed",
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
import { metricsCreate } from "@launchdarkly/mcp-server/funcs/metricsCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await metricsCreate(launchDarkly, {
    projectKey: "<value>",
    metricPost: {
      key: "metric-key-123abc",
      kind: "custom",
      isNumeric: false,
      eventKey: "Order placed",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostMetricRequest](../../models/operations/postmetricrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetricRep](../../models/components/metricrep.md)\>**

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

Get information for a single metric from the specific project.

### Expanding the metric response
LaunchDarkly supports four fields for expanding the "Get metric" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `experiments` includes all experiments from the specific project that use the metric
- `experimentCount` includes the number of experiments from the specific project that use the metric
- `metricGroups` includes all metric groups from the specific project that use the metric
- `metricGroupCount` includes the number of metric groups from the specific project that use the metric

For example, `expand=experiments` includes the `experiments` field in the response.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetric" method="get" path="/api/v2/metrics/{projectKey}/{metricKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.metrics.get({
    projectKey: "<value>",
    metricKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { metricsGet } from "@launchdarkly/mcp-server/funcs/metricsGet.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await metricsGet(launchDarkly, {
    projectKey: "<value>",
    metricKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetricRequest](../../models/operations/getmetricrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetricRep](../../models/components/metricrep.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## patch

Patch a metric by key. Updating a metric uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchMetric" method="patch" path="/api/v2/metrics/{projectKey}/{metricKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.metrics.patch({
    projectKey: "<value>",
    metricKey: "<value>",
    requestBody: [
      {
        op: "replace",
        path: "/name",
        value: "my-updated-metric",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { metricsPatch } from "@launchdarkly/mcp-server/funcs/metricsPatch.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await metricsPatch(launchDarkly, {
    projectKey: "<value>",
    metricKey: "<value>",
    requestBody: [
      {
        op: "replace",
        path: "/name",
        value: "my-updated-metric",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchMetricRequest](../../models/operations/patchmetricrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetricRep](../../models/components/metricrep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |