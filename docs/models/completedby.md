# CompletedBy

## Example Usage

```typescript
import { CompletedBy } from "@launchdarkly/mcp-server";

let value: CompletedBy = {
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
  token: {
    name: "DevOps token",
    ending: "2345",
    serviceToken: false,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `member`                                           | [models.MemberSummary](../models/membersummary.md) | :heavy_minus_sign:                                 | N/A                                                |
| `token`                                            | [models.TokenSummary](../models/tokensummary.md)   | :heavy_minus_sign:                                 | N/A                                                |