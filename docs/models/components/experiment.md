# Experiment

## Example Usage

```typescript
import { Experiment } from "@launchdarkly/mcp-server/models/components";

let value: Experiment = {
  id: "12ab3c45de678910fgh12345",
  key: "experiment-key-123abc",
  name: "Example experiment",
  description: "An example experiment, used in testing",
  maintainerId: "12ab3c45de678910fgh12345",
  creationDate: 778930,
  environmentKey: "<value>",
  methodology: "bayesian",
  dataSource: "snowflake",
  tags: [
    "experiment",
    "feature",
  ],
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
    reallocationFrequencyMillis: 3600000,
    version: 0,
    primaryMetric: {
      key: "metric-key-123abc",
      versionId: "<id>",
      name: "My metric",
      kind: "custom",
      isNumeric: true,
      eventKey: "event-key-123abc",
      links: {
        "self": {
          href: "/api/v2/metrics/my-project/my-metric",
          type: "application/json",
        },
      },
      isGroup: true,
      metrics: [
        {
          key: "metric-key-123abc",
          versionId: "version-id-123abc",
          name: "Example metric",
          kind: "custom",
          isNumeric: true,
          unitAggregationType: "sum",
          analysisType: "mean",
          eventKey: "event-key-123abc",
          links: {
            "self": {
              href: "/api/v2/metrics/my-project/my-metric",
              type: "application/json",
            },
          },
          nameInGroup: "Step 1",
          analysisUnits: [
            "user",
          ],
        },
      ],
      analysisType: "mean",
      analysisUnit: "user",
    },
    primarySingleMetric: {
      key: "metric-key-123abc",
      versionId: "version-id-123abc",
      name: "Example metric",
      kind: "custom",
      isNumeric: true,
      unitAggregationType: "sum",
      analysisType: "mean",
      eventKey: "event-key-123abc",
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
          analysisType: "mean",
          eventKey: "event-key-123abc",
          links: {
            "self": {
              href: "/api/v2/metrics/my-project/my-metric",
              type: "application/json",
            },
          },
          nameInGroup: "Step 1",
          analysisUnits: [
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
        eventKey: "event-key-123abc",
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
            analysisType: "mean",
            eventKey: "event-key-123abc",
            links: {
              "self": {
                href: "/api/v2/metrics/my-project/my-metric",
                type: "application/json",
              },
            },
            nameInGroup: "Step 1",
            analysisUnits: [
              "user",
            ],
          },
        ],
        analysisType: "mean",
        analysisUnit: "user",
      },
    ],
    layerSnapshot: {
      key: "checkout-flow",
      name: "Checkout Flow",
      reservationPercent: 10,
      otherReservationPercent: 70,
    },
    covariateInfo: {
      id: "74a49a2b-4834-4246-917e-5d85231d8c2a",
      fileName: "covariate.csv",
      createdAt: 511800,
    },
  },
  type: "experiment",
  access: {
    denied: [],
    allowed: [],
  },
  draftIteration: {
    id: "12ab3c45de678910fgh12345",
    hypothesis: "The new button placement will increase conversion",
    status: "running",
    createdAt: 241149,
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
    reallocationFrequencyMillis: 3600000,
    version: 0,
    primaryMetric: {
      key: "metric-key-123abc",
      versionId: "<id>",
      name: "My metric",
      kind: "custom",
      isNumeric: true,
      eventKey: "event-key-123abc",
      links: {
        "self": {
          href: "/api/v2/metrics/my-project/my-metric",
          type: "application/json",
        },
      },
      isGroup: true,
      metrics: [
        {
          key: "metric-key-123abc",
          versionId: "version-id-123abc",
          name: "Example metric",
          kind: "custom",
          isNumeric: true,
          unitAggregationType: "sum",
          analysisType: "mean",
          eventKey: "event-key-123abc",
          links: {
            "self": {
              href: "/api/v2/metrics/my-project/my-metric",
              type: "application/json",
            },
          },
          nameInGroup: "Step 1",
          analysisUnits: [
            "user",
          ],
        },
      ],
      analysisType: "mean",
      analysisUnit: "user",
    },
    primarySingleMetric: {
      key: "metric-key-123abc",
      versionId: "version-id-123abc",
      name: "Example metric",
      kind: "custom",
      isNumeric: true,
      unitAggregationType: "sum",
      analysisType: "mean",
      eventKey: "event-key-123abc",
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
          analysisType: "mean",
          eventKey: "event-key-123abc",
          links: {
            "self": {
              href: "/api/v2/metrics/my-project/my-metric",
              type: "application/json",
            },
          },
          nameInGroup: "Step 1",
          analysisUnits: [
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
        eventKey: "event-key-123abc",
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
            analysisType: "mean",
            eventKey: "event-key-123abc",
            links: {
              "self": {
                href: "/api/v2/metrics/my-project/my-metric",
                type: "application/json",
              },
            },
            nameInGroup: "Step 1",
            analysisUnits: [
              "user",
            ],
          },
        ],
        analysisType: "mean",
        analysisUnit: "user",
      },
    ],
    layerSnapshot: {
      key: "checkout-flow",
      name: "Checkout Flow",
      reservationPercent: 10,
      otherReservationPercent: 70,
    },
    covariateInfo: {
      id: "74a49a2b-4834-4246-917e-5d85231d8c2a",
      fileName: "covariate.csv",
      createdAt: 511800,
    },
  },
  previousIterations: [
    {
      id: "12ab3c45de678910fgh12345",
      hypothesis: "The new button placement will increase conversion",
      status: "running",
      createdAt: 68676,
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
      reallocationFrequencyMillis: 3600000,
      version: 0,
      primaryMetric: {
        key: "metric-key-123abc",
        versionId: "<id>",
        name: "My metric",
        kind: "custom",
        isNumeric: true,
        eventKey: "event-key-123abc",
        links: {
          "self": {
            href: "/api/v2/metrics/my-project/my-metric",
            type: "application/json",
          },
        },
        isGroup: true,
        metrics: [
          {
            key: "metric-key-123abc",
            versionId: "version-id-123abc",
            name: "Example metric",
            kind: "custom",
            isNumeric: true,
            unitAggregationType: "sum",
            analysisType: "mean",
            eventKey: "event-key-123abc",
            links: {
              "self": {
                href: "/api/v2/metrics/my-project/my-metric",
                type: "application/json",
              },
            },
            nameInGroup: "Step 1",
            analysisUnits: [
              "user",
            ],
          },
        ],
        analysisType: "mean",
        analysisUnit: "user",
      },
      primarySingleMetric: {
        key: "metric-key-123abc",
        versionId: "version-id-123abc",
        name: "Example metric",
        kind: "custom",
        isNumeric: true,
        unitAggregationType: "sum",
        analysisType: "mean",
        eventKey: "event-key-123abc",
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
            analysisType: "mean",
            eventKey: "event-key-123abc",
            links: {
              "self": {
                href: "/api/v2/metrics/my-project/my-metric",
                type: "application/json",
              },
            },
            nameInGroup: "Step 1",
            analysisUnits: [
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
          eventKey: "event-key-123abc",
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
              analysisType: "mean",
              eventKey: "event-key-123abc",
              links: {
                "self": {
                  href: "/api/v2/metrics/my-project/my-metric",
                  type: "application/json",
                },
              },
              nameInGroup: "Step 1",
              analysisUnits: [
                "user",
              ],
            },
          ],
          analysisType: "mean",
          analysisUnit: "user",
        },
      ],
      layerSnapshot: {
        key: "checkout-flow",
        name: "Checkout Flow",
        reservationPercent: 10,
        otherReservationPercent: 70,
      },
      covariateInfo: {
        id: "74a49a2b-4834-4246-917e-5d85231d8c2a",
        fileName: "covariate.csv",
        createdAt: 511800,
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
| `methodology`                                                                                                                                                                                                                                        | [components.ExperimentMethodology](../../models/components/experimentmethodology.md)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                   | The results analysis approach.                                                                                                                                                                                                                       | bayesian                                                                                                                                                                                                                                             |
| `dataSource`                                                                                                                                                                                                                                         | [components.ExperimentDataSource](../../models/components/experimentdatasource.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                   | The source of metric data in order to analyze results. Defaults to "launchdarkly" when not provided.                                                                                                                                                 | snowflake                                                                                                                                                                                                                                            |
| `archivedDate`                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `tags`                                                                                                                                                                                                                                               | *string*[]                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                   | Tags for the experiment                                                                                                                                                                                                                              | [<br/>"experiment",<br/>"feature"<br/>]                                                                                                                                                                                                              |
| `links`                                                                                                                                                                                                                                              | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                   | The location and content type of related resources                                                                                                                                                                                                   | {<br/>"parent": {<br/>"href": "/api/v2/projects/my-project/environments/my-environment",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/projects/my-project/environments/my-environment/experiments/my-experiment",<br/>"type": "application/json"<br/>}<br/>} |
| `holdoutId`                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                   | The holdout ID                                                                                                                                                                                                                                       | f3b74309-d581-44e1-8a2b-bb2933b4fe40                                                                                                                                                                                                                 |
| `currentIteration`                                                                                                                                                                                                                                   | [components.IterationRep](../../models/components/iterationrep.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `type`                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                   | The experiment type                                                                                                                                                                                                                                  | experiment                                                                                                                                                                                                                                           |
| `access`                                                                                                                                                                                                                                             | [components.Access](../../models/components/access.md)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `draftIteration`                                                                                                                                                                                                                                     | [components.IterationRep](../../models/components/iterationrep.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `previousIterations`                                                                                                                                                                                                                                 | [components.IterationRep](../../models/components/iterationrep.md)[]                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                   | Details on the previous iterations for this experiment.                                                                                                                                                                                              |                                                                                                                                                                                                                                                      |
| `analysisConfig`                                                                                                                                                                                                                                     | [components.AnalysisConfigRep](../../models/components/analysisconfigrep.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |
| `mutableFieldsByStatus`                                                                                                                                                                                                                              | [components.MutableFieldsByStatusRep](../../models/components/mutablefieldsbystatusrep.md)                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                      |