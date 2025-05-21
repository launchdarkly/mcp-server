# InsightsMetricTierDefinition

## Example Usage

```typescript
import { InsightsMetricTierDefinition } from "@launchdarkly/mcp-server";

let value: InsightsMetricTierDefinition = {
  indicator: "excellent",
  description: "at least 1 per day",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `indicator`                  | *string*                     | :heavy_check_mark:           | Metric indicator tier        | excellent                    |
| `description`                | *string*                     | :heavy_check_mark:           | Metric indicator description | at least 1 per day           |