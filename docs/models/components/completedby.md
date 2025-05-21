# CompletedBy

## Example Usage

```typescript
import { CompletedBy } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `member`                                                             | [components.MemberSummary](../../models/components/membersummary.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `token`                                                              | [components.TokenSummary](../../models/components/tokensummary.md)   | :heavy_minus_sign:                                                   | N/A                                                                  |