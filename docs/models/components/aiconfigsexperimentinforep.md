# AiConfigsExperimentInfoRep

## Example Usage

```typescript
import { AiConfigsExperimentInfoRep } from "@launchdarkly/mcp-server/models/components";

let value: AiConfigsExperimentInfoRep = {
  baselineIdx: 1,
  items: [
    {
      metricKey: "my-metric",
      metric: {
        experimentCount: 0,
        metricGroupCount: 0,
        guardedRolloutCount: 0,
        releasePolicyCount: 0,
        activeExperimentCount: 2,
        activeGuardedRolloutCount: 1,
        id: "5902deadbeef667524a01290",
        versionId: "version-id-123abc",
        version: 1,
        key: "metric-key-123abc",
        name: "My metric",
        kind: "custom",
        attachedFlagCount: 0,
        links: {
          "parent": {
            href: "/api/v2/metrics/my-project",
            type: "application/json",
          },
          "self": {
            href: "/api/v2/metrics/my-project/my-metric",
            type: "application/json",
          },
        },
        site: {
          href: "href",
          type: "type",
        },
        access: {
          denied: [
            {
              action: "action",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                notResources: [
                  "notResources",
                  "notResources",
                ],
                actions: [
                  "*",
                ],
                notActions: [
                  "<value 1>",
                  "<value 2>",
                ],
                effect: "allow",
                roleName: "role_name",
              },
            },
            {
              action: "action",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                notResources: [
                  "notResources",
                  "notResources",
                ],
                actions: [
                  "*",
                ],
                notActions: [
                  "<value 1>",
                  "<value 2>",
                ],
                effect: "allow",
                roleName: "role_name",
              },
            },
          ],
          allowed: [
            {
              action: "action",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                notResources: [
                  "notResources",
                  "notResources",
                ],
                actions: [
                  "*",
                ],
                notActions: [
                  "<value 1>",
                  "<value 2>",
                ],
                effect: "allow",
                roleName: "role_name",
              },
            },
            {
              action: "action",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                notResources: [
                  "notResources",
                  "notResources",
                ],
                actions: [
                  "*",
                ],
                notActions: [
                  "<value 1>",
                  "<value 2>",
                ],
                effect: "allow",
                roleName: "role_name",
              },
            },
          ],
        },
        tags: [],
        creationDate: 1,
        lastModified: {
          date: new Date("2021-08-05T19:46:31.148Z"),
        },
        maintainerId: "569fdeadbeef1644facecafe",
        maintainer: {
          links: {
            "self": {
              href: "/api/v2/members/569f183514f4432160000007",
              type: "application/json",
            },
          },
          id: "569f183514f4432160000007",
          firstName: "Ariel",
          lastName: "Flores",
          role: "admin",
          email: "ariel@acme.com",
        },
        description: "description",
        category: "Error monitoring",
        isNumeric: true,
        successCriteria: "HigherThanBaseline",
        unit: "unit",
        eventKey: "Order placed",
        randomizationUnits: [
          "user",
        ],
        analysisUnits: [
          "user",
        ],
        filters: {
          type: "contextAttribute",
          attribute: "country",
          op: "op",
          values: [
            "JP",
          ],
          contextKind: "user",
          negate: false,
        },
        unitAggregationType: "average",
        analysisType: "mean",
        percentileValue: 95,
        eventDefault: {
          disabled: true,
          value: 0,
        },
        dataSource: {
          key: "key",
          environmentKey: "environmentKey",
          name: "_name",
          integrationKey: "_integrationKey",
        },
        lastSeen: 1,
        archived: true,
        archivedAt: 6,
        selector: "selector",
        urls: [
          {
            "key": "<value>",
          },
          {
            "key": "<value>",
          },
        ],
        windowStartOffset: 7,
        windowEndOffset: 1,
        winsorLowerPercentile: 1,
        winsorUpperPercentile: 99.5,
        winsorIncludeImputed: false,
        traceQuery: "service.name = \"checkout\"",
        traceValueLocation: "duration",
        unitAggregationField: "unitAggregationField",
        denominator: {
          eventName: "eventName",
          isNumeric: true,
          unitAggregationType: "unitAggregationType",
          unitAggregationField: "unitAggregationField",
          valueColumn: "valueColumn",
          dataSource: {
            key: "key",
            environmentKey: "environmentKey",
            name: "_name",
            integrationKey: "_integrationKey",
          },
          filters: {
            type: "contextAttribute",
            attribute: "country",
            op: "op",
            values: [
              "JP",
            ],
            contextKind: "user",
            negate: false,
          },
          windowStartOffset: 4,
          windowEndOffset: 5,
          winsorLowerPercentile: 9.965781217890562,
          winsorUpperPercentile: 9.369310271410669,
          winsorIncludeImputed: true,
        },
      },
      environments: [
        "production",
        "test",
        "my-environment",
      ],
      environmentSettings: {
        "key": {
          startDate: 6,
          stopDate: 8,
          enabledPeriods: [
            {
              startDate: 9,
              stopDate: 6,
            },
            {
              startDate: 9,
              stopDate: 6,
            },
          ],
        },
      },
    },
    {
      metricKey: "my-metric",
      metric: {
        experimentCount: 0,
        metricGroupCount: 0,
        guardedRolloutCount: 0,
        releasePolicyCount: 0,
        activeExperimentCount: 2,
        activeGuardedRolloutCount: 1,
        id: "5902deadbeef667524a01290",
        versionId: "version-id-123abc",
        version: 1,
        key: "metric-key-123abc",
        name: "My metric",
        kind: "custom",
        attachedFlagCount: 0,
        links: {
          "parent": {
            href: "/api/v2/metrics/my-project",
            type: "application/json",
          },
          "self": {
            href: "/api/v2/metrics/my-project/my-metric",
            type: "application/json",
          },
        },
        site: {
          href: "href",
          type: "type",
        },
        access: {
          denied: [
            {
              action: "action",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                notResources: [
                  "notResources",
                  "notResources",
                ],
                actions: [
                  "*",
                ],
                notActions: [
                  "<value 1>",
                  "<value 2>",
                ],
                effect: "allow",
                roleName: "role_name",
              },
            },
            {
              action: "action",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                notResources: [
                  "notResources",
                  "notResources",
                ],
                actions: [
                  "*",
                ],
                notActions: [
                  "<value 1>",
                  "<value 2>",
                ],
                effect: "allow",
                roleName: "role_name",
              },
            },
          ],
          allowed: [
            {
              action: "action",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                notResources: [
                  "notResources",
                  "notResources",
                ],
                actions: [
                  "*",
                ],
                notActions: [
                  "<value 1>",
                  "<value 2>",
                ],
                effect: "allow",
                roleName: "role_name",
              },
            },
            {
              action: "action",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                notResources: [
                  "notResources",
                  "notResources",
                ],
                actions: [
                  "*",
                ],
                notActions: [
                  "<value 1>",
                  "<value 2>",
                ],
                effect: "allow",
                roleName: "role_name",
              },
            },
          ],
        },
        tags: [],
        creationDate: 1,
        lastModified: {
          date: new Date("2021-08-05T19:46:31.148Z"),
        },
        maintainerId: "569fdeadbeef1644facecafe",
        maintainer: {
          links: {
            "self": {
              href: "/api/v2/members/569f183514f4432160000007",
              type: "application/json",
            },
          },
          id: "569f183514f4432160000007",
          firstName: "Ariel",
          lastName: "Flores",
          role: "admin",
          email: "ariel@acme.com",
        },
        description: "description",
        category: "Error monitoring",
        isNumeric: true,
        successCriteria: "HigherThanBaseline",
        unit: "unit",
        eventKey: "Order placed",
        randomizationUnits: [
          "user",
        ],
        analysisUnits: [
          "user",
        ],
        filters: {
          type: "contextAttribute",
          attribute: "country",
          op: "op",
          values: [
            "JP",
          ],
          contextKind: "user",
          negate: false,
        },
        unitAggregationType: "average",
        analysisType: "mean",
        percentileValue: 95,
        eventDefault: {
          disabled: true,
          value: 0,
        },
        dataSource: {
          key: "key",
          environmentKey: "environmentKey",
          name: "_name",
          integrationKey: "_integrationKey",
        },
        lastSeen: 1,
        archived: true,
        archivedAt: 6,
        selector: "selector",
        urls: [
          {
            "key": "<value>",
          },
          {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
        ],
        windowStartOffset: 7,
        windowEndOffset: 1,
        winsorLowerPercentile: 1,
        winsorUpperPercentile: 99.5,
        winsorIncludeImputed: false,
        traceQuery: "service.name = \"checkout\"",
        traceValueLocation: "duration",
        unitAggregationField: "unitAggregationField",
        denominator: {
          eventName: "eventName",
          isNumeric: true,
          unitAggregationType: "unitAggregationType",
          unitAggregationField: "unitAggregationField",
          valueColumn: "valueColumn",
          dataSource: {
            key: "key",
            environmentKey: "environmentKey",
            name: "_name",
            integrationKey: "_integrationKey",
          },
          filters: {
            type: "contextAttribute",
            attribute: "country",
            op: "op",
            values: [
              "JP",
            ],
            contextKind: "user",
            negate: false,
          },
          windowStartOffset: 4,
          windowEndOffset: 5,
          winsorLowerPercentile: 9.965781217890562,
          winsorUpperPercentile: 9.369310271410669,
          winsorIncludeImputed: true,
        },
      },
      environments: [
        "production",
        "test",
        "my-environment",
      ],
      environmentSettings: {
        "key": {
          startDate: 6,
          stopDate: 8,
          enabledPeriods: [
            {
              startDate: 9,
              stopDate: 6,
            },
            {
              startDate: 9,
              stopDate: 6,
            },
          ],
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `baselineIdx`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `items`                                                                                              | [components.AiConfigsLegacyExperimentRep](../../models/components/aiconfigslegacyexperimentrep.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |