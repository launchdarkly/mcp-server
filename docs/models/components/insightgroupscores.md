# InsightGroupScores

## Example Usage

```typescript
import { InsightGroupScores } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `overall`                                                                        | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `deploymentFrequency`                                                            | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `deploymentFailureRate`                                                          | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `leadTime`                                                                       | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `impactSize`                                                                     | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `experimentationCoverage`                                                        | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `flagHealth`                                                                     | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `velocity`                                                                       | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `risk`                                                                           | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `efficiency`                                                                     | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `creationRatio`                                                                  | [components.InsightsMetricScore](../../models/components/insightsmetricscore.md) | :heavy_minus_sign:                                                               | N/A                                                                              |