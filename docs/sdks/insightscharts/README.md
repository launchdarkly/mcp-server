# InsightsCharts
(*insightsCharts*)

## Overview

### Available Operations

* [getDeploymentFrequencyChart](#getdeploymentfrequencychart) - Get deployment frequency chart data
* [getStaleFlagsChart](#getstaleflagschart) - Get stale flags chart data
* [getFlagStatus](#getflagstatus) - Get flag status chart data
* [getLeadTime](#getleadtime) - Get lead time chart data
* [getReleaseFrequencyChart](#getreleasefrequencychart) - Get release frequency chart data

## getDeploymentFrequencyChart

Get deployment frequency chart data. Engineering insights displays deployment frequency data in the [deployment frequency metric view](https://launchdarkly.com/docs/home/observability/deployments).

### Expanding the chart response

LaunchDarkly supports expanding the chart response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

* `metrics` includes details on the metrics related to deployment frequency

For example, use `?expand=metrics` to include the `metrics` field in the response. By default, this field is **not** included in the response.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.insightsCharts.getDeploymentFrequencyChart({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { insightsChartsGetDeploymentFrequencyChart } from "@launchdarkly/mcp-server/funcs/insightsChartsGetDeploymentFrequencyChart.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await insightsChartsGetDeploymentFrequencyChart(launchDarkly, {});

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
| `request`                                                                                                                                                                      | [operations.GetDeploymentFrequencyChartRequest](../../models/operations/getdeploymentfrequencychartrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightsChart](../../models/components/insightschart.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ValidationFailedErrorRep | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getStaleFlagsChart

Get stale flags chart data. Engineering insights displays stale flags data in the [flag health metric view](https://launchdarkly.com/docs/home/observability/flag-health).

### Expanding the chart response

LaunchDarkly supports expanding the chart response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

* `metrics` includes details on the metrics related to stale flags

For example, use `?expand=metrics` to include the `metrics` field in the response. By default, this field is **not** included in the response.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.insightsCharts.getStaleFlagsChart({
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
import { insightsChartsGetStaleFlagsChart } from "@launchdarkly/mcp-server/funcs/insightsChartsGetStaleFlagsChart.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await insightsChartsGetStaleFlagsChart(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.GetStaleFlagsChartRequest](../../models/operations/getstaleflagschartrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightsChart](../../models/components/insightschart.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ValidationFailedErrorRep | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getFlagStatus

Get flag status chart data. To learn more, read [Flag statuses](https://launchdarkly.com/docs/home/observability/flag-health#flag-statuses).

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.insightsCharts.getFlagStatus({
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
import { insightsChartsGetFlagStatus } from "@launchdarkly/mcp-server/funcs/insightsChartsGetFlagStatus.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await insightsChartsGetFlagStatus(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.GetFlagStatusChartRequest](../../models/operations/getflagstatuschartrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightsChart](../../models/components/insightschart.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ValidationFailedErrorRep | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getLeadTime

Get lead time chart data. The engineering insights UI displays lead time data in the [lead time metric view](https://launchdarkly.com/docs/home/observability/lead-time).

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.insightsCharts.getLeadTime({
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
import { insightsChartsGetLeadTime } from "@launchdarkly/mcp-server/funcs/insightsChartsGetLeadTime.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await insightsChartsGetLeadTime(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.GetLeadTimeChartRequest](../../models/operations/getleadtimechartrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightsChart](../../models/components/insightschart.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ValidationFailedErrorRep | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getReleaseFrequencyChart

Get release frequency chart data. Engineering insights displays release frequency data in the [release frequency metric view](https://launchdarkly.com/docs/home/observability/releases).

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.insightsCharts.getReleaseFrequencyChart({
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
import { insightsChartsGetReleaseFrequencyChart } from "@launchdarkly/mcp-server/funcs/insightsChartsGetReleaseFrequencyChart.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await insightsChartsGetReleaseFrequencyChart(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.GetReleaseFrequencyChartRequest](../../models/operations/getreleasefrequencychartrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InsightsChart](../../models/components/insightschart.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ValidationFailedErrorRep | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |