# InsightsChartMetric

## Example Usage

```typescript
import { InsightsChartMetric } from "@launchdarkly/mcp-server/models/components";

let value: InsightsChartMetric = {
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
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `indicator`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Metric indicator tier                                                                                | excellent                                                                                            |
| `value`                                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | Metric value                                                                                         | 5                                                                                                    |
| `unit`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Metric unit                                                                                          | count                                                                                                |
| `modifier`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Metric modifier                                                                                      | per day                                                                                              |
| `tiers`                                                                                              | [components.InsightsMetricTierDefinition](../../models/components/insightsmetrictierdefinition.md)[] | :heavy_check_mark:                                                                                   | Metric indicator tiers                                                                               |                                                                                                      |