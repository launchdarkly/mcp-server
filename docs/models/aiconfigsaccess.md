# AiConfigsAccess

## Example Usage

```typescript
import { AiConfigsAccess } from "@launchdarkly/mcp-server";

let value: AiConfigsAccess = {
  denied: [
    {
      action: "action",
      reason: {
        resources: [
          "proj/*:env/*;qa_*:/flag/*",
        ],
        notResources: [
          "notResources",
          "notResources",
        ],
        actions: [
          "*",
        ],
        notActions: [
          null,
          null,
        ],
        effect: "allow",
        roleName: "role_name",
      },
    },
    {
      action: "action",
      reason: {
        resources: [
          "proj/*:env/*;qa_*:/flag/*",
        ],
        notResources: [
          "notResources",
          "notResources",
        ],
        actions: [
          "*",
        ],
        notActions: [
          null,
          null,
        ],
        effect: "allow",
        roleName: "role_name",
      },
    },
  ],
  allowed: [
    {
      action: "action",
      reason: {
        resources: [
          "proj/*:env/*;qa_*:/flag/*",
        ],
        notResources: [
          "notResources",
          "notResources",
        ],
        actions: [
          "*",
        ],
        notActions: [
          null,
          null,
        ],
        effect: "allow",
        roleName: "role_name",
      },
    },
    {
      action: "action",
      reason: {
        resources: [
          "proj/*:env/*;qa_*:/flag/*",
        ],
        notResources: [
          "notResources",
          "notResources",
        ],
        actions: [
          "*",
        ],
        notActions: [
          null,
          null,
        ],
        effect: "allow",
        roleName: "role_name",
      },
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `denied`                                                                     | [models.AiConfigsAccessDenied](../models/aiconfigsaccessdenied.md)[]         | :heavy_check_mark:                                                           | N/A                                                                          |
| `allowed`                                                                    | [models.AiConfigsAccessAllowedRep](../models/aiconfigsaccessallowedrep.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |