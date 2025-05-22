# Access

## Example Usage

```typescript
import { Access } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `denied`                                                                     | [components.AccessDenied](../../models/components/accessdenied.md)[]         | :heavy_check_mark:                                                           | N/A                                                                          |
| `allowed`                                                                    | [components.AccessAllowedRep](../../models/components/accessallowedrep.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |