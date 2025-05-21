# AiConfigsAccess

## Example Usage

```typescript
import { AiConfigsAccess } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `denied`                                                                                       | [components.AiConfigsAccessDenied](../../models/components/aiconfigsaccessdenied.md)[]         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `allowed`                                                                                      | [components.AiConfigsAccessAllowedRep](../../models/components/aiconfigsaccessallowedrep.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |