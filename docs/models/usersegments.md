# UserSegments

## Example Usage

```typescript
import { UserSegments } from "@launchdarkly/mcp-server";

let value: UserSegments = {
  items: [
    {
      name: "Example segment",
      description: "Bundle our sample customers together",
      tags: [
        "testing",
      ],
      creationDate: 981434,
      lastModifiedDate: 95598,
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
      generation: 683638,
      external: "amplitude",
      externalLink: "https://analytics.amplitude.com/org/1234/cohort/123abc",
      importInProgress: false,
    },
  ],
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `items`                                            | [models.UserSegment](../models/usersegment.md)[]   | :heavy_check_mark:                                 | An array of segments                               |
| `links`                                            | Record<string, [models.Link](../models/link.md)>   | :heavy_check_mark:                                 | The location and content type of related resources |
| `totalCount`                                       | *number*                                           | :heavy_minus_sign:                                 | The total number of segments                       |