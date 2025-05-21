# Integrations

## Example Usage

```typescript
import { Integrations } from "@launchdarkly/mcp-server";

let value: Integrations = {
  items: [
    {
      id: "1234a56b7c89d012345e678f",
      kind: "datadog",
      name: "Example Datadog integration",
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
        "testing",
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

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `links`                                          | Record<string, [models.Link](../models/link.md)> | :heavy_minus_sign:                               | N/A                                              |
| `items`                                          | [models.Integration](../models/integration.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `key`                                            | *string*                                         | :heavy_minus_sign:                               | N/A                                              |