# InsightsChartSeriesMetadata

## Example Usage

```typescript
import { InsightsChartSeriesMetadata } from "@launchdarkly/mcp-server";

let value: InsightsChartSeriesMetadata = {
  name: "<value>",
  bounds: [
    {
      name: "equal",
      value: 100,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | Name of the series                                               |
| `count`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Aggregate count of the series values                             |
| `bounds`                                                         | [models.InsightsChartBounds](../models/insightschartbounds.md)[] | :heavy_minus_sign:                                               | Bounds for the series data                                       |