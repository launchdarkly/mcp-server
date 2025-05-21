# FollowersPerFlag

## Example Usage

```typescript
import { FollowersPerFlag } from "@launchdarkly/mcp-server/models/components";

let value: FollowersPerFlag = {
  flagKey: "example-flag-key",
  followers: [
    {
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
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `flagKey`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | The flag key                                                                 | example-flag-key                                                             |
| `followers`                                                                  | [components.FollowFlagMember](../../models/components/followflagmember.md)[] | :heavy_minus_sign:                                                           | A list of members who are following this flag                                |                                                                              |