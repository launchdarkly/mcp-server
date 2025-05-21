# CreateMetricGroupRequest

## Example Usage

```typescript
import { CreateMetricGroupRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateMetricGroupRequest = {
  projectKey: "<value>",
  metricGroupPost: {
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
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `projectKey`                                              | *string*                                                  | :heavy_check_mark:                                        | The project key                                           |
| `metricGroupPost`                                         | [models.MetricGroupPost](../../models/metricgrouppost.md) | :heavy_check_mark:                                        | N/A                                                       |