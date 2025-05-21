# HoldoutDetailRep

## Example Usage

```typescript
import { HoldoutDetailRep } from "@launchdarkly/mcp-server";

let value: HoldoutDetailRep = {
  id: "<id>",
  status: "enabled",
  holdoutAmount: "<value>",
  createdAt: 489390,
  updatedAt: 517184,
  baseExperiment: {
    id: "12ab3c45de678910fgh12345",
    key: "experiment-key-123abc",
    name: "Example experiment",
    description: "An example experiment, used in testing",
    maintainerId: "12ab3c45de678910fgh12345",
    creationDate: 167083,
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
      createdAt: 791204,
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
      createdAt: 99910,
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
        createdAt: 435630,
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
  },
  relatedExperiments: [
    {
      id: "12ab3c45de678910fgh12345",
      key: "experiment-key-123abc",
      name: "Example experiment",
      description: "An example experiment, used in testing",
      maintainerId: "12ab3c45de678910fgh12345",
      creationDate: 430252,
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
        createdAt: 129610,
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
        createdAt: 967628,
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
          createdAt: 468290,
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [models.HoldoutDetailRepStatus](../models/holdoutdetailrepstatus.md)                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `holdoutAmount`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | The percentage of traffic allocated to this holdout.                                       |
| `isDirty`                                                                                  | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Indicates if the holdout experiment is running and if any related experiments are running. |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `baseExperiment`                                                                           | [models.Experiment](../models/experiment.md)                                               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `relatedExperiments`                                                                       | [models.Experiment](../models/experiment.md)[]                                             | :heavy_minus_sign:                                                                         | N/A                                                                                        |