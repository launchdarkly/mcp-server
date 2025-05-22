# ExperimentInfoRep

## Example Usage

```typescript
import { ExperimentInfoRep } from "@launchdarkly/mcp-server/models/components";

let value: ExperimentInfoRep = {
  baselineIdx: 982167,
  items: [
    {
      metricKey: "my-metric",
      metric: {
        experimentCount: 0,
        metricGroupCount: 0,
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
        access: {
          denied: [
            {
              action: "<value>",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                actions: [
                  "*",
                ],
                effect: "allow",
              },
            },
          ],
          allowed: [
            {
              action: "<value>",
              reason: {
                resources: [
                  "proj/*:env/*;qa_*:/flag/*",
                ],
                actions: [
                  "*",
                ],
                effect: "allow",
              },
            },
          ],
        },
        tags: [],
        creationDate: 571783,
        lastModified: {
          date: new Date("2021-08-05T19:46:31.148082Z"),
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
        category: "Error monitoring",
        isNumeric: true,
        eventKey: "Order placed",
        randomizationUnits: [
          "user",
        ],
        filters: {
          type: "contextAttribute",
          attribute: "country",
          op: "<value>",
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
          value: 0,
        },
      },
      environments: [
        "production",
        "test",
        "my-environment",
      ],
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `baselineIdx`                                                                      | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `items`                                                                            | [components.LegacyExperimentRep](../../models/components/legacyexperimentrep.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |