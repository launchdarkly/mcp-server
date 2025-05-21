# DependentMetricOrMetricGroupRep

## Example Usage

```typescript
import { DependentMetricOrMetricGroupRep } from "@launchdarkly/mcp-server/models/components";

let value: DependentMetricOrMetricGroupRep = {
  key: "metric-key-123abc",
  versionId: "<id>",
  name: "My metric",
  kind: "custom",
  isNumeric: true,
  links: {
    "self": {
      href: "/api/v2/metrics/my-project/my-metric",
      type: "application/json",
    },
  },
  isGroup: false,
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

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          | Example                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                                                                                | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | A unique key to reference the metric or metric group                                                                                                                                 | metric-key-123abc                                                                                                                                                                    |
| `versionId`                                                                                                                                                                          | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The version ID of the metric or metric group                                                                                                                                         |                                                                                                                                                                                      |
| `name`                                                                                                                                                                               | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | A human-friendly name for the metric or metric group                                                                                                                                 | My metric                                                                                                                                                                            |
| `kind`                                                                                                                                                                               | [components.DependentMetricOrMetricGroupRepKind](../../models/components/dependentmetricormetricgrouprepkind.md)                                                                     | :heavy_check_mark:                                                                                                                                                                   | If this is a metric, then it represents the kind of event the metric tracks. If this is a metric group, then it represents the group type                                            | custom                                                                                                                                                                               |
| `isNumeric`                                                                                                                                                                          | *boolean*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                   | For custom metrics, whether to track numeric changes in value against a baseline (<code>true</code>) or to track a conversion when an end user takes an action (<code>false</code>). | true                                                                                                                                                                                 |
| `links`                                                                                                                                                                              | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                   | :heavy_check_mark:                                                                                                                                                                   | The location and content type of related resources                                                                                                                                   | {<br/>"self": {<br/>"href": "/api/v2/metrics/my-project/my-metric",<br/>"type": "application/json"<br/>}<br/>}                                                                       |
| `isGroup`                                                                                                                                                                            | *boolean*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                   | Whether this is a metric group or a metric                                                                                                                                           |                                                                                                                                                                                      |
| `metrics`                                                                                                                                                                            | [components.MetricInGroupRep](../../models/components/metricingrouprep.md)[]                                                                                                         | :heavy_minus_sign:                                                                                                                                                                   | An ordered list of the metrics in this metric group                                                                                                                                  |                                                                                                                                                                                      |