# FeatureFlags

## Example Usage

```typescript
import { FeatureFlags } from "@launchdarkly/mcp-server/models/components";

let value: FeatureFlags = {
  items: [
    {
      name: "My Flag",
      kind: "boolean",
      description: "This flag controls the example widgets",
      key: "flag-key-123abc",
      version: 1,
      creationDate: 374118,
      variations: [
        {
          id: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          value: true,
        },
        {
          id: "a00bf58d-d252-476c-b915-15a74becacb4",
          value: false,
        },
      ],
      temporary: true,
      tags: [
        "example-tag",
      ],
      links: {
        "parent": {
          href: "/api/v2/flags/my-project",
          type: "application/json",
        },
        "self": {
          href: "/api/v2/flags/my-project/my-flag",
          type: "application/json",
        },
      },
      maintainerId: "569f183514f4432160000007",
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
      maintainerTeamKey: "team-1",
      maintainerTeam: {
        key: "team-key-123abc",
        name: "Example team",
        links: {
          "parent": {
            href: "/api/v2/teams",
            type: "application/json",
          },
          "roles": {
            href: "/api/v2/teams/example-team/roles",
            type: "application/json",
          },
          "self": {
            href: "/api/v2/teams/example-team",
            type: "application/json",
          },
        },
      },
      experiments: {
        baselineIdx: 466412,
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
              creationDate: 22900,
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
      },
      customProperties: {
        "key": {
          name: "Jira issues",
          value: [
            "is-123",
            "is-456",
          ],
        },
      },
      archived: false,
      deprecated: false,
      defaults: {
        onVariation: 0,
        offVariation: 1,
      },
      migrationSettings: {
        contextKind: "device",
        stageCount: 6,
      },
      environments: {
        "my-environment": {
          on: false,
          archived: false,
          salt: "61eddeadbeef4da1facecafe3a60a397",
          sel: "810edeadbeef4844facecafe438f2999492",
          lastModified: 1627071171347,
          version: 1,
          targets: [
            {
              values: [
                "user-key-123abc",
              ],
              variation: 0,
              contextKind: "user",
            },
          ],
          contextTargets: [
            {
              values: [
                "device-key-123abc",
              ],
              variation: 0,
              contextKind: "device",
            },
          ],
          rules: [],
          fallthrough: {
            variation: 0,
          },
          offVariation: 1,
          prerequisites: [],
          site: {
            href: "/default/my-environment/features/client-side-flag",
            type: "text/html",
          },
          environmentName: "My Environment",
          trackEvents: false,
          trackEventsFallthrough: false,
          summary: {
            variations: {
              "0": {
                rules: 0,
                nullRules: 0,
                targets: 1,
                contextTargets: 1,
                isFallthrough: true,
              },
              "1": {
                rules: 0,
                nullRules: 0,
                targets: 0,
                contextTargets: 607127,
                isOff: true,
              },
            },
            prerequisites: 0,
          },
        },
      },
    },
  ],
  links: {
    "self": {
      href: "/api/v2/flags/default",
      type: "application/json",
    },
  },
  totalCount: 1,
  totalCountWithDifferences: 0,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                                                    | [components.FeatureFlag](../../models/components/featureflag.md)[]                                                                         | :heavy_check_mark:                                                                                                                         | An array of feature flags                                                                                                                  |                                                                                                                                            |
| `links`                                                                                                                                    | Record<string, [components.Link](../../models/components/link.md)>                                                                         | :heavy_check_mark:                                                                                                                         | The location and content type of related resources                                                                                         | {<br/>"self": {<br/>"href": "/api/v2/flags/default",<br/>"type": "application/json"<br/>}<br/>}                                            |
| `totalCount`                                                                                                                               | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The total number of flags                                                                                                                  | 1                                                                                                                                          |
| `totalCountWithDifferences`                                                                                                                | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The number of flags that have differences between environments. Only shown when query parameter <code>compare</code> is <code>true</code>. | 0                                                                                                                                          |