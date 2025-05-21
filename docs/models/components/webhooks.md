# Webhooks

## Example Usage

```typescript
import { Webhooks } from "@launchdarkly/mcp-server/models/components";

let value: Webhooks = {
  links: {
    "key": {},
  },
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_check_mark:                                                 | The location and content type of related resources                 |
| `items`                                                            | [components.Webhook](../../models/components/webhook.md)[]         | :heavy_check_mark:                                                 | An array of webhooks                                               |