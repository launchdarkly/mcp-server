# AnnouncementAccessDeniedReason

## Example Usage

```typescript
import { AnnouncementAccessDeniedReason } from "@launchdarkly/mcp-server/models/components";

let value: AnnouncementAccessDeniedReason = {
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
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resources`                                                                                                                                           | *string*[]                                                                                                                                            | :heavy_minus_sign:                                                                                                                                    | Resource specifier strings                                                                                                                            | [<br/>"proj/*:env/*;qa_*:/flag/*"<br/>]                                                                                                               |
| `notResources`                                                                                                                                        | *string*[]                                                                                                                                            | :heavy_minus_sign:                                                                                                                                    | Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field. |                                                                                                                                                       |
| `actions`                                                                                                                                             | *string*[]                                                                                                                                            | :heavy_minus_sign:                                                                                                                                    | Actions to perform on a resource                                                                                                                      | [<br/>"*"<br/>]                                                                                                                                       |
| `notActions`                                                                                                                                          | *string*[]                                                                                                                                            | :heavy_minus_sign:                                                                                                                                    | Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.     |                                                                                                                                                       |
| `effect`                                                                                                                                              | [components.AnnouncementAccessDeniedReasonEffect](../../models/components/announcementaccessdeniedreasoneffect.md)                                    | :heavy_check_mark:                                                                                                                                    | Whether this statement should allow or deny actions on the resources.                                                                                 | allow                                                                                                                                                 |
| `roleName`                                                                                                                                            | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |                                                                                                                                                       |