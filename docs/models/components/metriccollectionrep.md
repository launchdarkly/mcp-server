# MetricCollectionRep

## Example Usage

```typescript
import { MetricCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: MetricCollectionRep = {
  items: [
    {
      experimentCount: 0,
      metricGroupCount: 0,
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
      access: {
        denied: [],
        allowed: [],
      },
      tags: [],
      creationDate: 229136,
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
      analysisUnits: [
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
      dataSource: {
        key: "<key>",
      },
      winsorLowerPercentile: 1,
      winsorUpperPercentile: 99.5,
      winsorIncludeImputed: false,
      traceQuery: "service.name = \"checkout\"",
      traceValueLocation: "duration",
      denominator: {
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
      },
    },
  ],
  links: {
    "self": {
      href: "/api/v2/metrics/my-project?limit=20",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `items`                                                                                   | [components.MetricListingRep](../../models/components/metriclistingrep.md)[]              | :heavy_minus_sign:                                                                        | An array of metrics                                                                       |                                                                                           |
| `links`                                                                                   | Record<string, [components.Link](../../models/components/link.md)>                        | :heavy_minus_sign:                                                                        | The location and content type of related resources                                        | {<br/>"self": {<br/>"href": "/api/v2/metrics/my-project?limit=20",<br/>"type": "application/json"<br/>}<br/>} |
| `totalCount`                                                                              | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |