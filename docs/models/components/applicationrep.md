# ApplicationRep

## Example Usage

```typescript
import { ApplicationRep } from "@launchdarkly/mcp-server/models/components";

let value: ApplicationRep = {
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
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      | Example                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `flags`                                                                                                                                                                                          | [components.ApplicationFlagCollectionRep](../../models/components/applicationflagcollectionrep.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `access`                                                                                                                                                                                         | [components.Access](../../models/components/access.md)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `links`                                                                                                                                                                                          | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                               | The location and content type of related resources                                                                                                                                               |                                                                                                                                                                                                  |
| `version`                                                                                                                                                                                        | *number*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | Version of the application                                                                                                                                                                       |                                                                                                                                                                                                  |
| `autoAdded`                                                                                                                                                                                      | *boolean*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                               | Whether the application was automatically created because it was included in a context when a LaunchDarkly SDK evaluated a feature flag, or was created through the LaunchDarkly UI or REST API. | true                                                                                                                                                                                             |
| `creationDate`                                                                                                                                                                                   | *number*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `description`                                                                                                                                                                                    | *string*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | The application description                                                                                                                                                                      | The LaunchDarkly Cafe app                                                                                                                                                                        |
| `key`                                                                                                                                                                                            | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | The unique identifier of this application                                                                                                                                                        | com.launchdarkly.cafe                                                                                                                                                                            |
| `kind`                                                                                                                                                                                           | [components.ApplicationRepKind](../../models/components/applicationrepkind.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                                               | To distinguish the kind of application                                                                                                                                                           | mobile                                                                                                                                                                                           |
| `maintainer`                                                                                                                                                                                     | [components.MaintainerRep](../../models/components/maintainerrep.md)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `name`                                                                                                                                                                                           | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | The name of the application                                                                                                                                                                      | LaunchDarklyCafe                                                                                                                                                                                 |