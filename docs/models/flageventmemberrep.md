# FlagEventMemberRep

## Example Usage

```typescript
import { FlagEventMemberRep } from "@launchdarkly/mcp-server";

let value: FlagEventMemberRep = {
  id: "65baa44ecc4b5bce113bb4f7",
  email: "test@launchdarkly.com",
  firstName: "Kayley",
  lastName: "O'Conner",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | The member ID            | 65baa44ecc4b5bce113bb4f7 |
| `email`                  | *string*                 | :heavy_check_mark:       | The member email         | test@launchdarkly.com    |
| `firstName`              | *string*                 | :heavy_check_mark:       | The member first name    |                          |
| `lastName`               | *string*                 | :heavy_check_mark:       | The member last name     |                          |