# InsightScores

## Example Usage

```typescript
import { InsightScores } from "@launchdarkly/mcp-server";

let value: InsightScores = {
  period: {
    startTime: 18650,
    endTime: 53359,
  },
  lastPeriod: {
    startTime: 122865,
    endTime: 932000,
  },
  scores: {
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
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `period`                                                     | [models.InsightPeriod](../models/insightperiod.md)           | :heavy_check_mark:                                           | N/A                                                          |
| `lastPeriod`                                                 | [models.InsightPeriod](../models/insightperiod.md)           | :heavy_check_mark:                                           | N/A                                                          |
| `scores`                                                     | [models.InsightGroupScores](../models/insightgroupscores.md) | :heavy_check_mark:                                           | N/A                                                          |
| `links`                                                      | Record<string, [models.Link](../models/link.md)>             | :heavy_minus_sign:                                           | The location and content type of related resources           |