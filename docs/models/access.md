# Access

## Example Usage

```typescript
import { Access } from "@launchdarkly/mcp-server";

let value: Access = {
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `denied`                                                   | [models.AccessDenied](../models/accessdenied.md)[]         | :heavy_check_mark:                                         | N/A                                                        |
| `allowed`                                                  | [models.AccessAllowedRep](../models/accessallowedrep.md)[] | :heavy_check_mark:                                         | N/A                                                        |