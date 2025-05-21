# Tokens

## Example Usage

```typescript
import { Tokens } from "@launchdarkly/mcp-server";

let value: Tokens = {
  items: [
    {
      id: "<id>",
      ownerId: "<id>",
      memberId: "<id>",
      member: {
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
      },
      name: "Example reader token",
      description: "A reader token used in testing and examples",
      creationDate: 670874,
      lastModified: 701134,
      customRoleIds: [],
      inlineRole: [],
      role: "reader",
      token: "1234",
      serviceToken: false,
      links: {
        "parent": {
          href: "/api/v2/tokens",
          type: "application/json",
        },
        "self": {
          href: "/api/v2/tokens/61095542756dba551110ae21",
          type: "application/json",
        },
      },
      defaultApiVersion: 20220603,
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `items`                                          | [models.Token](../models/token.md)[]             | :heavy_minus_sign:                               | An array of access tokens                        |
| `links`                                          | Record<string, [models.Link](../models/link.md)> | :heavy_minus_sign:                               | N/A                                              |
| `totalCount`                                     | *number*                                         | :heavy_minus_sign:                               | The number of access tokens returned             |