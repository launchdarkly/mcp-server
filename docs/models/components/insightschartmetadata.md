# InsightsChartMetadata

## Example Usage

```typescript
import { InsightsChartMetadata } from "@launchdarkly/mcp-server/models/components";

let value: InsightsChartMetadata = {
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
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `summary`                                                                                                | Record<string, *any*>                                                                                    | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Name of the chart                                                                                        | deploymentFrequency                                                                                      |
| `metrics`                                                                                                | Record<string, [components.InsightsChartMetric](../../models/components/insightschartmetric.md)>         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `xAxis`                                                                                                  | [components.InsightsChartSeriesMetadataAxis](../../models/components/insightschartseriesmetadataaxis.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `yAxis`                                                                                                  | [components.InsightsChartSeriesMetadataAxis](../../models/components/insightschartseriesmetadataaxis.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |