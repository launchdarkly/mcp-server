# InsightGroupScores

## Example Usage

```typescript
import { InsightGroupScores } from "@launchdarkly/mcp-server";

let value: InsightGroupScores = {
  overall: {
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
  },
  deploymentFrequency: {
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
  deploymentFailureRate: {
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
  leadTime: {
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
  impactSize: {
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
  experimentationCoverage: {
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
  flagHealth: {
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
  velocity: {
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
  risk: {
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
  efficiency: {
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
  creationRatio: {
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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `overall`                                                      | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `deploymentFrequency`                                          | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `deploymentFailureRate`                                        | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `leadTime`                                                     | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `impactSize`                                                   | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `experimentationCoverage`                                      | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `flagHealth`                                                   | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `velocity`                                                     | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `risk`                                                         | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `efficiency`                                                   | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_check_mark:                                             | N/A                                                            |
| `creationRatio`                                                | [models.InsightsMetricScore](../models/insightsmetricscore.md) | :heavy_minus_sign:                                             | N/A                                                            |