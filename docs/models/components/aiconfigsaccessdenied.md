# AiConfigsAccessDenied

## Example Usage

```typescript
import { AiConfigsAccessDenied } from "@launchdarkly/mcp-server/models/components";

let value: AiConfigsAccessDenied = {
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
      "<value 1>",
      "<value 2>",
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
| `reason`                                                                                                                                                                                            | [components.AiConfigsAccessDeniedReason](../../models/components/aiconfigsaccessdeniedreason.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 | {<br/>"role_name": "role_name",<br/>"notActions": [<br/>null,<br/>null<br/>],<br/>"notResources": [<br/>"notResources",<br/>"notResources"<br/>],<br/>"effect": "allow",<br/>"resources": [<br/>"proj/*:env/*;qa_*:/flag/*"<br/>],<br/>"actions": [<br/>"*"<br/>]<br/>} |