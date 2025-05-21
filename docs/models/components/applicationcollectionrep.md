# ApplicationCollectionRep

## Example Usage

```typescript
import { ApplicationCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: ApplicationCollectionRep = {
  items: [
    {
      flags: {
        items: [
          {
            name: "Example flag",
            key: "flag-key-123abc",
          },
        ],
        totalCount: 1,
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
      autoAdded: true,
      description: "The LaunchDarkly Cafe app",
      key: "com.launchdarkly.cafe",
      kind: "mobile",
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
      name: "LaunchDarklyCafe",
    },
  ],
  totalCount: 1,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `links`                                                                  | Record<string, [components.Link](../../models/components/link.md)>       | :heavy_minus_sign:                                                       | The location and content type of related resources                       |                                                                          |
| `items`                                                                  | [components.ApplicationRep](../../models/components/applicationrep.md)[] | :heavy_minus_sign:                                                       | A list of applications                                                   |                                                                          |
| `totalCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | The number of applications                                               | 1                                                                        |