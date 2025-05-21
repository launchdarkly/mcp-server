# Webhook

## Example Usage

```typescript
import { Webhook } from "@launchdarkly/mcp-server/models/components";

let value: Webhook = {
  links: {
    "key": {},
  },
  id: "57be1db38b75bf0772d11384",
  name: "Example hook",
  url: "http://www.example.com",
  secret: "frobozz",
  statements: [
    {
      resources: [
        "proj/*:env/*;qa_*:/flag/*",
      ],
      actions: [
        "*",
      ],
      effect: "allow",
    },
  ],
  on: true,
  tags: [
    "examples",
  ],
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
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `links`                                                                                    | Record<string, [components.Link](../../models/components/link.md)>                         | :heavy_check_mark:                                                                         | The location and content type of related resources                                         |                                                                                            |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of this webhook                                                                     | 57be1db38b75bf0772d11384                                                                   |
| `name`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | A human-readable name for this webhook                                                     | Example hook                                                                               |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | The URL to which LaunchDarkly sends an HTTP POST payload for this webhook                  | http://www.example.com                                                                     |
| `secret`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | The secret for this webhook                                                                | frobozz                                                                                    |
| `statements`                                                                               | [components.Statement](../../models/components/statement.md)[]                             | :heavy_minus_sign:                                                                         | Represents a Custom role policy, defining a resource kinds filter the webhook responds to. |                                                                                            |
| `on`                                                                                       | *boolean*                                                                                  | :heavy_check_mark:                                                                         | Whether or not this webhook is enabled                                                     | true                                                                                       |
| `tags`                                                                                     | *string*[]                                                                                 | :heavy_check_mark:                                                                         | List of tags for this webhook                                                              | [<br/>"examples"<br/>]                                                                     |
| `access`                                                                                   | [components.Access](../../models/components/access.md)                                     | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |