# MaintainerMember

## Example Usage

```typescript
import { MaintainerMember } from "@launchdarkly/mcp-server/models/components";

let value: MaintainerMember = {
  id: "<id>",
  email: "Greta_Will@hotmail.com",
  role: "<value>",
  kind: "kind",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | The member ID            |
| `email`                  | *string*                 | :heavy_check_mark:       | The member email address |
| `firstName`              | *string*                 | :heavy_minus_sign:       | The member first name    |
| `lastName`               | *string*                 | :heavy_minus_sign:       | The member last name     |
| `role`                   | *string*                 | :heavy_check_mark:       | The member role          |
| `kind`                   | *string*                 | :heavy_check_mark:       | N/A                      |