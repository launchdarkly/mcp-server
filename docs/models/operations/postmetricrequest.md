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
    analysisUnits: [
      "user",
    ],
    maintainerId: "569fdeadbeef1644facecafe",
    unitAggregationType: "average",
    analysisType: "mean",
    percentileValue: 95,
    eventDefault: {
      value: 0,
    },
    filters: {
      type: "contextAttribute",
      attribute: "country",
      op: "<value>",
      values: [
        "JP",
      ],
      contextKind: "user",
      negate: false,
    },
    winsorLowerPercentile: 1,
    winsorUpperPercentile: 99.5,
    winsorIncludeImputed: false,
    traceQuery: "service.name = \"checkout\"",
    traceValueLocation: "duration",
    denominator: {
      eventName: "checkout.started",
      unitAggregationType: "sum",
      filters: {
        type: "contextAttribute",
        attribute: "country",
        op: "<value>",
        values: [
          "JP",
        ],
        contextKind: "user",
        negate: false,
      },
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `projectKey`                                                   | *string*                                                       | :heavy_check_mark:                                             | The project key                                                |
| `metricPost`                                                   | [components.MetricPost](../../models/components/metricpost.md) | :heavy_check_mark:                                             | N/A                                                            |