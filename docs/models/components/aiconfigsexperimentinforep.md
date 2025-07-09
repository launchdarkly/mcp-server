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
        id: "5902deadbeef667524a01290",
        versionId: "version-id-123abc",
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
      },
      environments: [
        "production",
        "test",
        "my-environment",
      ],
      environmentSettings: {
        "key": {
          startDate: 1,
          stopDate: 6,
          enabledPeriods: [
            {
              startDate: 7,
              stopDate: 1,
            },
            {
              startDate: 7,
              stopDate: 1,
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
        id: "5902deadbeef667524a01290",
        versionId: "version-id-123abc",
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
      },
      environments: [
        "production",
        "test",
        "my-environment",
      ],
      environmentSettings: {
        "key": {
          startDate: 1,
          stopDate: 6,
          enabledPeriods: [
            {
              startDate: 7,
              stopDate: 1,
            },
            {
              startDate: 7,
              stopDate: 1,
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