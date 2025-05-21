# Members

## Example Usage

```typescript
import { Members } from "@launchdarkly/mcp-server";

let value: Members = {
  items: [
    {
      links: {
        "key": {},
      },
      id: "507f1f77bcf86cd799439011",
      firstName: "Ariel",
      lastName: "Flores",
      role: "reader",
      email: "ariel@acme.com",
      pendingInvite: false,
      verified: true,
      customRoles: [
        "devOps",
        "backend-devs",
      ],
      mfa: "<value>",
      lastSeen: 551307,
      lastSeenMetadata: {
        tokenId: "5b52207f8ca8e631d31fdb2b",
      },
      teams: [
        {
          customRoleKeys: [
            "access-to-test-projects",
          ],
          key: "team-key-123abc",
          name: "QA Team",
        },
      ],
      permissionGrants: [
        {
          actions: [
            "maintainTeam",
          ],
          resource: "team/qa-team",
        },
      ],
      creationDate: 351356,
      version: 1,
    },
  ],
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `items`                                            | [models.Member](../models/member.md)[]             | :heavy_check_mark:                                 | An array of members                                |
| `links`                                            | Record<string, [models.Link](../models/link.md)>   | :heavy_check_mark:                                 | The location and content type of related resources |
| `totalCount`                                       | *number*                                           | :heavy_minus_sign:                                 | The number of members returned                     |