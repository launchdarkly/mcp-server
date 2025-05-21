# InsightsChartSeries

## Example Usage

```typescript
import { InsightsChartSeries } from "@launchdarkly/mcp-server";

let value: InsightsChartSeries = {
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `metadata`                                                                         | [models.InsightsChartSeriesMetadata](../models/insightschartseriesmetadata.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [models.InsightsChartSeriesDataPoint](../models/insightschartseriesdatapoint.md)[] | :heavy_check_mark:                                                                 | Data points for the series                                                         |