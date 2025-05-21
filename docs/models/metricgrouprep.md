# MetricGroupRep

## Example Usage

```typescript
import { MetricGroupRep } from "@launchdarkly/mcp-server";

let value: MetricGroupRep = {
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
  creationDate: 853674,
  lastModified: 263381,
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
      creationDate: 277426,
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
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      | Example                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                             | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | The ID of this metric group                                                                                                                                                                      | bc3e5be1-02d2-40c7-9926-26d0aacd7aab                                                                                                                                                             |
| `key`                                                                                                                                                                                            | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | A unique key to reference the metric group                                                                                                                                                       | metric-group-key-123abc                                                                                                                                                                          |
| `name`                                                                                                                                                                                           | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | A human-friendly name for the metric group                                                                                                                                                       | My metric group                                                                                                                                                                                  |
| `kind`                                                                                                                                                                                           | [models.MetricGroupRepKind](../models/metricgrouprepkind.md)                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                               | The type of the metric group                                                                                                                                                                     | funnel                                                                                                                                                                                           |
| `description`                                                                                                                                                                                    | *string*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | Description of the metric group                                                                                                                                                                  | Description of the metric group                                                                                                                                                                  |
| `links`                                                                                                                                                                                          | Record<string, [models.Link](../models/link.md)>                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                               | The location and content type of related resources                                                                                                                                               | {<br/>"parent": {<br/>"href": "/api/v2/projects/my-project",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/projects/my-project/metric-groups/my-metric-group",<br/>"type": "application/json"<br/>}<br/>} |
| `access`                                                                                                                                                                                         | [models.Access](../models/access.md)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `tags`                                                                                                                                                                                           | *string*[]                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                               | Tags for the metric group                                                                                                                                                                        | [<br/>"ops"<br/>]                                                                                                                                                                                |
| `creationDate`                                                                                                                                                                                   | *number*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `lastModified`                                                                                                                                                                                   | *number*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `maintainer`                                                                                                                                                                                     | [models.MaintainerRep](../models/maintainerrep.md)                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `metrics`                                                                                                                                                                                        | [models.MetricInGroupRep](../models/metricingrouprep.md)[]                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                               | An ordered list of the metrics in this metric group                                                                                                                                              |                                                                                                                                                                                                  |
| `version`                                                                                                                                                                                        | *number*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | The version of this metric group                                                                                                                                                                 | 1                                                                                                                                                                                                |
| `experiments`                                                                                                                                                                                    | [models.DependentExperimentRep](../models/dependentexperimentrep.md)[]                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `experimentCount`                                                                                                                                                                                | *number*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | The number of experiments using this metric group                                                                                                                                                | 0                                                                                                                                                                                                |