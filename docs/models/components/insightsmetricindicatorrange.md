# InsightsMetricIndicatorRange

## Example Usage

```typescript
import { InsightsMetricIndicatorRange } from "@launchdarkly/mcp-server/models/components";

let value: InsightsMetricIndicatorRange = {
  min: 0,
  max: 100,
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `min`                                     | *number*                                  | :heavy_check_mark:                        | The minimum value for the indicator range | 0                                         |
| `max`                                     | *number*                                  | :heavy_check_mark:                        | The maximum value for the indicator range | 100                                       |