# PostMetricRequest

## Example Usage

```typescript
import { PostMetricRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostMetricRequest = {
  projectKey: "<value>",
  metricPost: {
    key: "metric-key-123abc",
    name: "Example metric",
    description: "optional description",
    kind: "custom",
    selector: ".dropdown-toggle",
    urls: [
      {},
    ],
    isNumeric: false,
    unit: "orders",
    eventKey: "Order placed",
    successCriteria: "HigherThanBaseline",
    tags: [
      "example-tag",
    ],
    randomizationUnits: [
      "user",
    ],
    maintainerId: "569fdeadbeef1644facecafe",
    unitAggregationType: "average",
    analysisType: "mean",
    percentileValue: 95,
    eventDefault: {
      value: 0,
    },
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `projectKey`                                    | *string*                                        | :heavy_check_mark:                              | The project key                                 |
| `metricPost`                                    | [models.MetricPost](../../models/metricpost.md) | :heavy_check_mark:                              | N/A                                             |