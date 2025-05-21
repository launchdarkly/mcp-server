# CreateSubscriptionRequest

## Example Usage

```typescript
import { CreateSubscriptionRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateSubscriptionRequest = {
  integrationKey: "<value>",
  subscriptionPost: {
    name: "Example audit log subscription.",
    statements: [
      {
        resources: [
          "proj/*:env/*:flag/*;testing-tag",
        ],
        actions: [
          "*",
        ],
        effect: "allow",
      },
    ],
    on: false,
    tags: [
      "testing-tag",
    ],
    config: {
      "optional": "an optional property",
      "required": "the required property",
      "url": "https://example.com",
    },
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `integrationKey`                                            | *string*                                                    | :heavy_check_mark:                                          | The integration key                                         |
| `subscriptionPost`                                          | [models.SubscriptionPost](../../models/subscriptionpost.md) | :heavy_check_mark:                                          | N/A                                                         |