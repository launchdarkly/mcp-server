# MetricInMetricGroupInput

## Example Usage

```typescript
import { MetricInMetricGroupInput } from "@launchdarkly/mcp-server/models/components";

let value: MetricInMetricGroupInput = {
  key: "metric-key-123abc",
  nameInGroup: "Step 1",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The metric key                                                                                                         | metric-key-123abc                                                                                                      |
| `nameInGroup`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Name of the metric when used within the associated metric group. Can be different from the original name of the metric | Step 1                                                                                                                 |