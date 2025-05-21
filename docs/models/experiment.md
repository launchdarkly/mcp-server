# Experiment

## Example Usage

```typescript
import { Experiment } from "@launchdarkly/mcp-server";

let value: Experiment = {
  id: "12ab3c45de678910fgh12345",
  key: "experiment-key-123abc",
  name: "Example experiment",
  description: "An example experiment, used in testing",
  maintainerId: "12ab3c45de678910fgh12345",
  creationDate: 778930,
  environmentKey: "<value>",
  links: {
    "parent": {
      href: "/api/v2/projects/my-project/environments/my-environment",
      type: "application/json",
    },
    "self": {
      href:
        "/api/v2/projects/my-project/environments/my-environment/experiments/my-experiment",
      type: "application/json",
    },
  },
  holdoutId: "f3b74309-d581-44e1-8a2b-bb2933b4fe40",
  currentIteration: {
    id: "12ab3c45de678910fgh12345",
    hypothesis: "The new button placement will increase conversion",
    status: "running",
    createdAt: 565325,
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
  },
  draftIteration: {
    id: "12ab3c45de678910fgh12345",
    hypothesis: "The new button placement will increase conversion",
    status: "running",
    createdAt: 254730,
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
  },
  previousIterations: [
    {
      id: "12ab3c45de678910fgh12345",
      hypothesis: "The new button placement will increase conversion",
      status: "running",
      createdAt: 730416,
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                   | The experiment ID                                                                                                                                                                                                                                    | 12ab3c45de678910fgh12345                                                                                                                                                                                                                             |
| `key`                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                   | The experiment key                                                                                                                                                                                                                                   | experiment-key-123abc                                                                                                                                                                                                                                |
| `name`                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                   | The experiment name                                                                                                                                                                                                                                  | Example experiment                                                                                                                                                                                                                                   |
| `description`                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                   | The experiment description                                                                                                                                                                                                                           | An example experiment, used in testing                                                                                                                                                                                                               |
| `maintainerId`                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                   | The ID of the member who maintains this experiment.                                                                                                                                                                                                  | 12ab3c45de678910fgh12345                                                                                                                                                                                                                             |
| `creationDate`                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `environmentKey`                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `archivedDate`                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `links`                                                                                                                                                                                                                                              | Record<string, [models.Link](../models/link.md)>                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                   | The location and content type of related resources                                                                                                                                                                                                   | {<br/>"parent": {<br/>"href": "/api/v2/projects/my-project/environments/my-environment",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/projects/my-project/environments/my-environment/experiments/my-experiment",<br/>"type": "application/json"<br/>}<br/>} |
| `holdoutId`                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                   | The holdout ID                                                                                                                                                                                                                                       | f3b74309-d581-44e1-8a2b-bb2933b4fe40                                                                                                                                                                                                                 |
| `currentIteration`                                                                                                                                                                                                                                   | [models.IterationRep](../models/iterationrep.md)                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `draftIteration`                                                                                                                                                                                                                                     | [models.IterationRep](../models/iterationrep.md)                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `previousIterations`                                                                                                                                                                                                                                 | [models.IterationRep](../models/iterationrep.md)[]                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                   | Details on the previous iterations for this experiment.                                                                                                                                                                                              |                                                                                                                                                                                                                                                      |