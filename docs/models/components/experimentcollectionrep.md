# ExperimentCollectionRep

## Example Usage

```typescript
import { ExperimentCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: ExperimentCollectionRep = {
  items: [
    {
      id: "12ab3c45de678910fgh12345",
      key: "experiment-key-123abc",
      name: "Example experiment",
      description: "An example experiment, used in testing",
      maintainerId: "12ab3c45de678910fgh12345",
      creationDate: 461120,
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
        createdAt: 981918,
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
        createdAt: 463084,
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
          createdAt: 261357,
          winningTreatmentId: "122c9f3e-da26-4321-ba68-e0fc02eced58",
          winningReason:
            "We ran this iteration for two weeks and the winning variation was clear",
          canReshuffleTraffic: true,
          flags: {
            "key": {
              targetingRule: "fallthrough",
              targetingRuleDescription: "Customers who live in Canada",
              flagConfigVersion: 12,
              notInExperimentVariationId:
                "e432f62b-55f6-49dd-a02f-eb24acf39d05",
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
                href:
                  "/api/v2/projects/my-project/metric-groups/my-metric-group",
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
    },
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `items`                                                                                               | [components.Experiment](../../models/components/experiment.md)[]                                      | :heavy_check_mark:                                                                                    | An array of experiments                                                                               |
| `totalCount`                                                                                          | *number*                                                                                              | :heavy_minus_sign:                                                                                    | The total number of experiments in this project and environment. Does not include legacy experiments. |
| `links`                                                                                               | Record<string, [components.Link](../../models/components/link.md)>                                    | :heavy_minus_sign:                                                                                    | The location and content type of related resources                                                    |