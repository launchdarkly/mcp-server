# MaintainerRep

## Example Usage

```typescript
import { MaintainerRep } from "@launchdarkly/mcp-server";

let value: MaintainerRep = {
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
  team: {
    customRoleKeys: [
      "access-to-test-projects",
    ],
    key: "team-key-123abc",
    name: "QA Team",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `member`                                                         | [models.MemberSummary](../models/membersummary.md)               | :heavy_minus_sign:                                               | N/A                                                              |
| `team`                                                           | [models.MemberTeamSummaryRep](../models/memberteamsummaryrep.md) | :heavy_minus_sign:                                               | N/A                                                              |