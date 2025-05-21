# AnnouncementAccessRep

## Example Usage

```typescript
import { AnnouncementAccessRep } from "@launchdarkly/mcp-server/models/components";

let value: AnnouncementAccessRep = {
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `denied`                                                                                             | [components.AnnouncementAccessDenied](../../models/components/announcementaccessdenied.md)[]         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `allowed`                                                                                            | [components.AnnouncementAccessAllowedRep](../../models/components/announcementaccessallowedrep.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |