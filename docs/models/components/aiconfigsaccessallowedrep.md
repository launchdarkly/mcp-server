# AiConfigsAccessAllowedRep

## Example Usage

```typescript
import { AiConfigsAccessAllowedRep } from "@launchdarkly/mcp-server/models/components";

let value: AiConfigsAccessAllowedRep = {
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
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         | Example                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |                                                                                                                                                                                                     |
| `reason`                                                                                                                                                                                            | [components.AiConfigsAccessAllowedReason](../../models/components/aiconfigsaccessallowedreason.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 | {<br/>"role_name": "role_name",<br/>"notActions": [<br/>null,<br/>null<br/>],<br/>"notResources": [<br/>"notResources",<br/>"notResources"<br/>],<br/>"effect": "allow",<br/>"resources": [<br/>"proj/*:env/*;qa_*:/flag/*"<br/>],<br/>"actions": [<br/>"*"<br/>]<br/>} |