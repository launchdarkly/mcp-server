# IterationRep

## Example Usage

```typescript
import { IterationRep } from "@launchdarkly/mcp-server";

let value: IterationRep = {
  id: "12ab3c45de678910fgh12345",
  hypothesis: "The new button placement will increase conversion",
  status: "running",
  createdAt: 818540,
  winningTreatmentId: "122c9f3e-da26-4321-ba68-e0fc02eced58",
  winningReason:
    "We ran this iteration for two weeks and the winning variation was clear",
  canReshuffleTraffic: true,
  flags: {
    "key": {
      targetingRule: "fallthrough",
      targetingRuleDescription: "Customers who live in Canada",
      flagConfigVersion: 12,
      notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
      links: {
        "self": {
          href: "/api/v2/flags/my-project/my-flag",
          type: "application/json",
        },
      },
    },
  },
  primaryMetric: {
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
  },
  primarySingleMetric: {
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
  },
  primaryFunnel: {
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
  },
  randomizationUnit: "user",
  treatments: [
    {
      id: "122c9f3e-da26-4321-ba68-e0fc02eced58",
      name: "Treatment 1",
      allocationPercent: "10",
      baseline: true,
    },
  ],
  metrics: [
    {
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
    },
  ],
  layerSnapshot: {
    key: "checkout-flow",
    name: "Checkout Flow",
    reservationPercent: 10,
    otherReservationPercent: 70,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | The iteration ID                                                                                                                                                                                                             | 12ab3c45de678910fgh12345                                                                                                                                                                                                     |
| `hypothesis`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The expected outcome of this experiment                                                                                                                                                                                      | The new button placement will increase conversion                                                                                                                                                                            |
| `status`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The status of the iteration: <code>not_started</code>, <code>running</code>, <code>stopped</code>                                                                                                                            | running                                                                                                                                                                                                                      |
| `createdAt`                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |                                                                                                                                                                                                                              |
| `startedAt`                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |                                                                                                                                                                                                                              |
| `endedAt`                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |                                                                                                                                                                                                                              |
| `winningTreatmentId`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | The ID of the treatment chosen when the experiment stopped                                                                                                                                                                   | 122c9f3e-da26-4321-ba68-e0fc02eced58                                                                                                                                                                                         |
| `winningReason`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | The reason you stopped the experiment                                                                                                                                                                                        | We ran this iteration for two weeks and the winning variation was clear                                                                                                                                                      |
| `canReshuffleTraffic`                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                           | Whether the experiment may reassign traffic to different variations when the experiment audience changes (true) or must keep all traffic assigned to its initial variation (false).                                          | true                                                                                                                                                                                                                         |
| `flags`                                                                                                                                                                                                                      | Record<string, [models.FlagRep](../models/flagrep.md)>                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                           | Details on the flag used in this experiment                                                                                                                                                                                  |                                                                                                                                                                                                                              |
| `primaryMetric`                                                                                                                                                                                                              | [models.DependentMetricOrMetricGroupRep](../models/dependentmetricormetricgrouprep.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |                                                                                                                                                                                                                              |
| `primarySingleMetric`                                                                                                                                                                                                        | [models.MetricV2Rep](../models/metricv2rep.md)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |                                                                                                                                                                                                                              |
| `primaryFunnel`                                                                                                                                                                                                              | [models.DependentMetricGroupRepWithMetrics](../models/dependentmetricgrouprepwithmetrics.md)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |                                                                                                                                                                                                                              |
| `randomizationUnit`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | The unit of randomization for this iteration                                                                                                                                                                                 | user                                                                                                                                                                                                                         |
| `attributes`                                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                           | The available attribute filters for this iteration                                                                                                                                                                           |                                                                                                                                                                                                                              |
| `treatments`                                                                                                                                                                                                                 | [models.TreatmentRep](../models/treatmentrep.md)[]                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                           | Details on the variations you are testing in the experiment                                                                                                                                                                  |                                                                                                                                                                                                                              |
| ~~`secondaryMetrics`~~                                                                                                                                                                                                       | [models.MetricV2Rep](../models/metricv2rep.md)[]                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                           | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated, use <code>metrics</code> instead. Details on the secondary metrics for this experiment. |                                                                                                                                                                                                                              |
| `metrics`                                                                                                                                                                                                                    | [models.DependentMetricOrMetricGroupRep](../models/dependentmetricormetricgrouprep.md)[]                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | Details on the metrics for this experiment                                                                                                                                                                                   |                                                                                                                                                                                                                              |
| `layerSnapshot`                                                                                                                                                                                                              | [models.LayerSnapshotRep](../models/layersnapshotrep.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |                                                                                                                                                                                                                              |