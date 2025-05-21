# FlagFollowersGetRep

## Example Usage

```typescript
import { FlagFollowersGetRep } from "@launchdarkly/mcp-server/models/components";

let value: FlagFollowersGetRep = {
  links: {
    "self": {
      href:
        "/api/v2/projects/my-project/flags/my-flay/environments/my-environment/followers",
      type: "application/json",
    },
  },
  items: [
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

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                               | Record<string, [components.Link](../../models/components/link.md)>                                                                    | :heavy_check_mark:                                                                                                                    | The location and content type of related resources                                                                                    | {<br/>"self": {<br/>"href": "/api/v2/projects/my-project/flags/my-flay/environments/my-environment/followers",<br/>"type": "application/json"<br/>}<br/>} |
| `items`                                                                                                                               | [components.FollowFlagMember](../../models/components/followflagmember.md)[]                                                          | :heavy_check_mark:                                                                                                                    | An array of members who are following this flag                                                                                       |                                                                                                                                       |