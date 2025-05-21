# Teams

## Example Usage

```typescript
import { Teams } from "@launchdarkly/mcp-server";

let value: Teams = {
  items: [
    {
      description: "Description for this team.",
      key: "team-key-123abc",
      name: "Example team",
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
      links: {
        "parent": {
          href: "/api/v2/teams",
          type: "application/json",
        },
        "roles": {
          href: "/api/v2/teams/example-team/roles",
          type: "application/json",
        },
        "self": {
          href: "/api/v2/teams/example-team",
          type: "application/json",
        },
      },
      version: 3,
      idpSynced: true,
      roles: {
        totalCount: 1,
        items: [
          {
            key: "role-key-123abc",
            name: "Example role",
            projects: {
              totalCount: 1,
              items: [
                {
                  id: "57be1db38b75bf0772d11383",
                  links: {
                    "environments": {
                      href: "/api/v2/projects/example-project/environments",
                      type: "application/json",
                    },
                    "self": {
                      href: "/api/v2/projects/example-project",
                      type: "application/json",
                    },
                  },
                  key: "project-key-123abc",
                  name: "Example project",
                },
              ],
            },
          },
        ],
        links: {
          "self": {
            href: "/api/v2/teams/example-team/roles?limit=25",
            type: "application/json",
          },
        },
      },
      members: {
        totalCount: 15,
      },
      projects: {
        totalCount: 1,
        items: [
          {
            id: "57be1db38b75bf0772d11383",
            links: {
              "environments": {
                href: "/api/v2/projects/example-project/environments",
                type: "application/json",
              },
              "self": {
                href: "/api/v2/projects/example-project",
                type: "application/json",
              },
            },
            key: "project-key-123abc",
            name: "Example project",
          },
        ],
      },
      maintainers: {
        totalCount: 1,
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
            role: "reader",
            email: "ariel@acme.com",
          },
        ],
        links: {
          "self": {
            href: "/api/v2/teams/example-team/maintainers?limit=5",
            type: "application/json",
          },
        },
      },
    },
  ],
  links: {
    "self": {
      href:
        "/api/v2/teams?expand=maintainers%2Cmembers%2Croles%2Cprojects&limit=20",
      type: "application/json",
    },
  },
  totalCount: 1,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                           | [models.Team](../models/team.md)[]                                                                                                | :heavy_check_mark:                                                                                                                | An array of teams                                                                                                                 |                                                                                                                                   |
| `links`                                                                                                                           | Record<string, [models.Link](../models/link.md)>                                                                                  | :heavy_minus_sign:                                                                                                                | The location and content type of related resources                                                                                | {<br/>"self": {<br/>"href": "/api/v2/teams?expand=maintainers%2Cmembers%2Croles%2Cprojects\u0026limit=20",<br/>"type": "application/json"<br/>}<br/>} |
| `totalCount`                                                                                                                      | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The number of teams                                                                                                               | 1                                                                                                                                 |