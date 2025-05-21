# Users

## Example Usage

```typescript
import { Users } from "@launchdarkly/mcp-server/models/components";

let value: Users = {
  links: {
    "next": {
      href:
        "/api/v2/user-search/my-project/my-environment?after=1647993600000&limit=20&searchAfter=my-user&sort=userKey",
      type: "application/json",
    },
    "self": {
      href:
        "/api/v2/user-search/my-project/my-environment?after=1647993600000&limit=20&sort=userKey",
      type: "application/json",
    },
  },
  totalCount: 245,
  items: [
    {
      lastPing: new Date("2022-06-28T23:21:29.176609596Z"),
      user: {
        key: "user-key-123abc",
        secondary: "2398127",
        ip: "10.10.10.10",
        country: "United States",
        email: "sandy@example.com",
        firstName: "Sandy",
        lastName: "Smith",
        avatar: "http://example.com/avatar.png",
        name: "Sandy Smith",
        anonymous: false,
      },
      sortValue: "user-key-123abc",
      links: {
        "parent": {
          href: "/api/v2/users/my-project/my-environment",
          type: "application/json",
        },
        "self": {
          href: "/api/v2/users/my-project/my-environment/my-user",
          type: "application/json",
        },
        "settings": {
          href: "/api/v2/users/my-project/my-environment/my-user/flags",
          type: "text/html",
        },
        "site": {
          href: "/my-project/my-environment/users/my-user",
          type: "text/html",
        },
      },
      access: {
        denied: [
          {
            action: "<value>",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              actions: [
                "*",
              ],
              effect: "allow",
            },
          },
        ],
        allowed: [
          {
            action: "<value>",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              actions: [
                "*",
              ],
              effect: "allow",
            },
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                                                                                                                                                                               | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                    | The location and content type of related resources                                                                                                                                                                                                                                                                                    | {<br/>"next": {<br/>"href": "/api/v2/user-search/my-project/my-environment?after=1647993600000\u0026limit=20\u0026searchAfter=my-user\u0026sort=userKey",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/user-search/my-project/my-environment?after=1647993600000\u0026limit=20\u0026sort=userKey",<br/>"type": "application/json"<br/>}<br/>} |
| `totalCount`                                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                    | The total number of users in the environment                                                                                                                                                                                                                                                                                          | 245                                                                                                                                                                                                                                                                                                                                   |
| `items`                                                                                                                                                                                                                                                                                                                               | [components.UserRecord](../../models/components/userrecord.md)[]                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                    | Details on the users                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                       |