# FollowFlagMember

## Example Usage

```typescript
import { FollowFlagMember } from "@launchdarkly/mcp-server/models/components";

let value: FollowFlagMember = {
  links: {
    "self": {
      href: "/api/v2/members/569f183514f4432160000007",
      type: "application/json",
    },
  },
  id: "569f183514f4432160000007",
  firstName: "Ariel",
  lastName: "Flores",
  role: "admin",
  email: "ariel@acme.com",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `links`                                                                                        | Record<string, [components.Link](../../models/components/link.md)>                             | :heavy_check_mark:                                                                             | The location and content type of related resources                                             | {<br/>"self": {<br/>"href": "/api/v2/members/569f183514f4432160000007",<br/>"type": "application/json"<br/>}<br/>} |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The member's ID                                                                                | 569f183514f4432160000007                                                                       |
| `firstName`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The member's first name                                                                        | Ariel                                                                                          |
| `lastName`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | The member's last name                                                                         | Flores                                                                                         |
| `role`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | The member's built-in role. If the member has no custom roles, this role will be in effect.    | admin                                                                                          |
| `email`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The member's email address                                                                     | ariel@acme.com                                                                                 |