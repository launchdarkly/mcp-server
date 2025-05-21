# NewMemberForm

## Example Usage

```typescript
import { NewMemberForm } from "@launchdarkly/mcp-server/models/components";

let value: NewMemberForm = {
  email: "sandy@acme.com",
  password: "***",
  firstName: "Ariel",
  lastName: "Flores",
  role: "reader",
  customRoles: [
    "customRole1",
    "customRole2",
  ],
  teamKeys: [
    "team-1",
    "team-2",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `email`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | The member's email                                                           | sandy@acme.com                                                               |
| `password`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | The member's password                                                        | ***                                                                          |
| `firstName`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | The member's first name                                                      | Ariel                                                                        |
| `lastName`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | The member's last name                                                       | Flores                                                                       |
| `role`                                                                       | [components.NewMemberFormRole](../../models/components/newmemberformrole.md) | :heavy_minus_sign:                                                           | The member's built-in role                                                   | reader                                                                       |
| `customRoles`                                                                | *string*[]                                                                   | :heavy_minus_sign:                                                           | An array of the member's custom roles                                        | [<br/>"customRole1",<br/>"customRole2"<br/>]                                 |
| `teamKeys`                                                                   | *string*[]                                                                   | :heavy_minus_sign:                                                           | An array of the member's teams                                               | [<br/>"team-1",<br/>"team-2"<br/>]                                           |
| `roleAttributes`                                                             | Record<string, *string*[]>                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |