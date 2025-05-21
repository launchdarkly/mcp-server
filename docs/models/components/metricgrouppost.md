# MetricGroupPost

## Example Usage

```typescript
import { MetricGroupPost } from "@launchdarkly/mcp-server/models/components";

let value: MetricGroupPost = {
  key: "metric-group-key-123abc",
  name: "My metric group",
  kind: "funnel",
  description: "Description of the metric group",
  maintainerId: "569fdeadbeef1644facecafe",
  tags: [
    "ops",
  ],
  metrics: [
    {
      key: "metric-key-123abc",
      nameInGroup: "Step 1",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `key`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | A unique key to reference the metric group                                                   | metric-group-key-123abc                                                                      |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | A human-friendly name for the metric group                                                   | My metric group                                                                              |
| `kind`                                                                                       | [components.MetricGroupPostKind](../../models/components/metricgrouppostkind.md)             | :heavy_check_mark:                                                                           | The type of the metric group                                                                 | funnel                                                                                       |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Description of the metric group                                                              | Description of the metric group                                                              |
| `maintainerId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the member who maintains this metric group                                         | 569fdeadbeef1644facecafe                                                                     |
| `tags`                                                                                       | *string*[]                                                                                   | :heavy_check_mark:                                                                           | Tags for the metric group                                                                    | [<br/>"ops"<br/>]                                                                            |
| `metrics`                                                                                    | [components.MetricInMetricGroupInput](../../models/components/metricinmetricgroupinput.md)[] | :heavy_check_mark:                                                                           | An ordered list of the metrics in this metric group                                          |                                                                                              |