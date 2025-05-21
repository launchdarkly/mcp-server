# DependentMetricGroupRepWithMetrics

## Example Usage

```typescript
import { DependentMetricGroupRepWithMetrics } from "@launchdarkly/mcp-server/models/components";

let value: DependentMetricGroupRepWithMetrics = {
  key: "metric-group-key-123abc",
  name: "My metric group",
  kind: "funnel",
  links: {
    "parent": {
      href: "/api/v2/projects/my-project",
      type: "application/json",
    },
    "self": {
      href: "/api/v2/projects/my-project/metric-groups/my-metric-group",
      type: "application/json",
    },
  },
  metrics: [
    {
      key: "metric-key-123abc",
      versionId: "version-id-123abc",
      name: "Example metric",
      kind: "custom",
      isNumeric: true,
      unitAggregationType: "sum",
      links: {
        "self": {
          href: "/api/v2/metrics/my-project/my-metric",
          type: "application/json",
        },
      },
      nameInGroup: "Step 1",
      randomizationUnits: [
        "user",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      | Example                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                                                                                            | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | A unique key to reference the metric group                                                                                                                                                       | metric-group-key-123abc                                                                                                                                                                          |
| `name`                                                                                                                                                                                           | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | A human-friendly name for the metric group                                                                                                                                                       | My metric group                                                                                                                                                                                  |
| `kind`                                                                                                                                                                                           | [components.DependentMetricGroupRepWithMetricsKind](../../models/components/dependentmetricgrouprepwithmetricskind.md)                                                                           | :heavy_check_mark:                                                                                                                                                                               | The type of the metric group                                                                                                                                                                     | funnel                                                                                                                                                                                           |
| `links`                                                                                                                                                                                          | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                               | :heavy_check_mark:                                                                                                                                                                               | The location and content type of related resources                                                                                                                                               | {<br/>"parent": {<br/>"href": "/api/v2/projects/my-project",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/projects/my-project/metric-groups/my-metric-group",<br/>"type": "application/json"<br/>}<br/>} |
| `metrics`                                                                                                                                                                                        | [components.MetricInGroupRep](../../models/components/metricingrouprep.md)[]                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                               | The metrics in the metric group                                                                                                                                                                  |                                                                                                                                                                                                  |