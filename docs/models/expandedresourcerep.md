# ExpandedResourceRep

## Example Usage

```typescript
import { ExpandedResourceRep } from "@launchdarkly/mcp-server";

let value: ExpandedResourceRep = {
  kind: "flag",
  flag: {
    name: "My Flag",
    kind: "boolean",
    description: "This flag controls the example widgets",
    key: "flag-key-123abc",
    version: 1,
    creationDate: 282301,
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
    defaults: {
      onVariation: 0,
      offVariation: 1,
    },
  },
  segment: {
    name: "Example segment",
    description: "Bundle our sample customers together",
    tags: [
      "testing",
    ],
    creationDate: 750803,
    lastModifiedDate: 245661,
    key: "segment-key-123abc",
    included: [
      "user-key-123abc",
    ],
    excluded: [
      "user-key-123abc",
    ],
    links: {
      "key": {},
    },
    rules: [
      {
        id: "1234a56b7c89d012345e678f",
        clauses: [
          {
            id: "12ab3c45de678910fab12345",
            attribute: "email",
            op: "endsWith",
            values: [
              ".edu",
            ],
            negate: false,
          },
        ],
      },
    ],
    version: 1,
    deleted: false,
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
    flags: [
      {
        name: "Example flag",
        key: "flag-key-123abc",
      },
    ],
    unbounded: false,
    generation: 812366,
    external: "amplitude",
    externalLink: "https://analytics.amplitude.com/org/1234/cohort/123abc",
    importInProgress: false,
  },
  aiConfig: {
    key: "aiconfig-key-123abc",
    name: "AI Config 1",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `kind`                                                 | *string*                                               | :heavy_check_mark:                                     | The type of resource                                   | flag                                                   |
| `flag`                                                 | [models.ExpandedFlagRep](../models/expandedflagrep.md) | :heavy_minus_sign:                                     | N/A                                                    |                                                        |
| `segment`                                              | [models.UserSegment](../models/usersegment.md)         | :heavy_minus_sign:                                     | N/A                                                    |                                                        |
| `aiConfig`                                             | [models.AIConfigRep](../models/aiconfigrep.md)         | :heavy_minus_sign:                                     | N/A                                                    |                                                        |