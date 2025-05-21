# GetExperimentResultsForMetricGroupRequest

## Example Usage

```typescript
import { GetExperimentResultsForMetricGroupRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetExperimentResultsForMetricGroupRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  experimentKey: "<value>",
  metricGroupKey: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `environmentKey`     | *string*             | :heavy_check_mark:   | The environment key  |
| `experimentKey`      | *string*             | :heavy_check_mark:   | The experiment key   |
| `metricGroupKey`     | *string*             | :heavy_check_mark:   | The metric group key |
| `iterationId`        | *string*             | :heavy_minus_sign:   | The iteration ID     |