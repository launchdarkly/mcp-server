# InsightsChartMetadata

## Example Usage

```typescript
import { InsightsChartMetadata } from "@launchdarkly/mcp-server";

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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `summary`                                                                              | Record<string, *any*>                                                                  | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the chart                                                                      | deploymentFrequency                                                                    |
| `metrics`                                                                              | Record<string, [models.InsightsChartMetric](../models/insightschartmetric.md)>         | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `xAxis`                                                                                | [models.InsightsChartSeriesMetadataAxis](../models/insightschartseriesmetadataaxis.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `yAxis`                                                                                | [models.InsightsChartSeriesMetadataAxis](../models/insightschartseriesmetadataaxis.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |