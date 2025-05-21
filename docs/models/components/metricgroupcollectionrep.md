# MetricGroupCollectionRep

## Example Usage

```typescript
import { MetricGroupCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: MetricGroupCollectionRep = {
  items: [
    {
      id: "bc3e5be1-02d2-40c7-9926-26d0aacd7aab",
      key: "metric-group-key-123abc",
      name: "My metric group",
      kind: "funnel",
      description: "Description of the metric group",
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
      tags: [
        "ops",
      ],
      creationDate: 61702,
      lastModified: 25932,
      maintainer: {
        member: {
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
        team: {
          customRoleKeys: [
            "access-to-test-projects",
          ],
          key: "team-key-123abc",
          name: "QA Team",
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
      version: 1,
      experiments: [
        {
          key: "experiment-key-123abc",
          name: "Example experiment",
          environmentId: "1234a56b7c89d012345e678f",
          environmentKey: "production",
          creationDate: 952838,
          links: {
            "parent": {
              href: "/api/v2/projects/my-project/environments/my-environment",
              type: "application/json",
            },
            "self": {
              href:
                "/api/v2/projects/my-project/environments/my-environment/experiments/example-experiment",
              type: "application/json",
            },
          },
        },
      ],
      experimentCount: 0,
    },
  ],
  links: {
    "parent": {
      href: "/api/v2/projects/my-project",
      type: "application/json",
    },
    "self": {
      href: "/api/v2/projects/my-project/metric-groups",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      | Example                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                                                                          | [components.MetricGroupRep](../../models/components/metricgrouprep.md)[]                                                                                                         | :heavy_check_mark:                                                                                                                                                               | An array of metric groups                                                                                                                                                        |                                                                                                                                                                                  |
| `links`                                                                                                                                                                          | Record<string, [components.Link](../../models/components/link.md)>                                                                                                               | :heavy_minus_sign:                                                                                                                                                               | The location and content type of related resources                                                                                                                               | {<br/>"parent": {<br/>"href": "/api/v2/projects/my-project",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/projects/my-project/metric-groups",<br/>"type": "application/json"<br/>}<br/>} |
| `totalCount`                                                                                                                                                                     | *number*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | N/A                                                                                                                                                                              |                                                                                                                                                                                  |