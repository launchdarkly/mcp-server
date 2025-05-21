# InsightsChartSeriesDataPoint

## Example Usage

```typescript
import { InsightsChartSeriesDataPoint } from "@launchdarkly/mcp-server/models/components";

let value: InsightsChartSeriesDataPoint = {
  x: 1617225600000,
  y: 100,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `x`                                  | *number*                             | :heavy_check_mark:                   | X-axis value                         | 1617225600000                        |
| `y`                                  | *number*                             | :heavy_check_mark:                   | Y-axis value                         | 100                                  |
| `values`                             | Record<string, *any*>                | :heavy_minus_sign:                   | Additional values for the data point |                                      |