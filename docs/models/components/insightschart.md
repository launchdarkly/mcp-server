# InsightsChart

## Example Usage

```typescript
import { InsightsChart } from "@launchdarkly/mcp-server/models/components";

let value: InsightsChart = {
  metadata: {
    summary: {
      "key": "<value>",
    },
    name: "deploymentFrequency",
    metrics: {
      "key": {
        indicator: "excellent",
        value: 5,
        unit: "count",
        modifier: "per day",
        tiers: [
          {
            indicator: "excellent",
            description: "at least 1 per day",
          },
        ],
      },
    },
    xAxis: {
      unit: "count",
    },
    yAxis: {
      unit: "count",
    },
  },
  series: [
    {
      metadata: {
        name: "<value>",
        bounds: [
          {
            name: "equal",
            value: 100,
          },
        ],
      },
      data: [
        {
          x: 1617225600000,
          y: 100,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `metadata`                                                                           | [components.InsightsChartMetadata](../../models/components/insightschartmetadata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `series`                                                                             | [components.InsightsChartSeries](../../models/components/insightschartseries.md)[]   | :heavy_check_mark:                                                                   | Series data for the chart                                                            |