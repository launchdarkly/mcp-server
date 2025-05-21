# MemberDataRep

## Example Usage

```typescript
import { MemberDataRep } from "@launchdarkly/mcp-server";

let value: MemberDataRep = {
  id: "507f1f77bcf86cd799439011",
  email: "ariel@acme.com",
  firstName: "Ariel",
  lastName: "Flores",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `links`                                          | Record<string, [models.Link](../models/link.md)> | :heavy_minus_sign:                               | N/A                                              |                                                  |
| `id`                                             | *string*                                         | :heavy_minus_sign:                               | The member ID                                    | 507f1f77bcf86cd799439011                         |
| `email`                                          | *string*                                         | :heavy_minus_sign:                               | The member email                                 | ariel@acme.com                                   |
| `firstName`                                      | *string*                                         | :heavy_minus_sign:                               | The member first name                            | Ariel                                            |
| `lastName`                                       | *string*                                         | :heavy_minus_sign:                               | The member last name                             | Flores                                           |