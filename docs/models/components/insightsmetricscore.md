# InsightsMetricScore

## Example Usage

```typescript
import { InsightsMetricScore } from "@launchdarkly/mcp-server/models/components";

let value: InsightsMetricScore = {
  score: 100,
  aggregateOf: [
    "deploymentFrequency",
    "leadTime",
  ],
  indicator: "<value>",
  indicatorRange: {
    min: 0,
    max: 100,
  },
  lastPeriod: {
    score: 100,
    aggregateOf: [
      "deploymentFrequency",
      "leadTime",
    ],
    indicator: "<value>",
    indicatorRange: {
      min: 0,
      max: 100,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `score`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | The score for the metric                                                                           | 100                                                                                                |
| `aggregateOf`                                                                                      | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | The keys of the metrics that were aggregated to calculate this score                               | [<br/>"deploymentFrequency",<br/>"leadTime"<br/>]                                                  |
| `diffVsLastPeriod`                                                                                 | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `indicator`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `indicatorRange`                                                                                   | [components.InsightsMetricIndicatorRange](../../models/components/insightsmetricindicatorrange.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `lastPeriod`                                                                                       | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md)                   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |