# Team

## Example Usage

```typescript
import { Team } from "@launchdarkly/mcp-server/models/components";

let value: Team = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                       | A description of the team                                                                                                                                                                                                                | Description for this team.                                                                                                                                                                                                               |
| `key`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                       | The team key                                                                                                                                                                                                                             | team-key-123abc                                                                                                                                                                                                                          |
| `name`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                       | A human-friendly name for the team                                                                                                                                                                                                       | Example team                                                                                                                                                                                                                             |
| `access`                                                                                                                                                                                                                                 | [components.Access](../../models/components/access.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                          |
| `creationDate`                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                          |
| `links`                                                                                                                                                                                                                                  | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                       | The location and content type of related resources                                                                                                                                                                                       | {<br/>"parent": {<br/>"href": "/api/v2/teams",<br/>"type": "application/json"<br/>},<br/>"roles": {<br/>"href": "/api/v2/teams/example-team/roles",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/teams/example-team",<br/>"type": "application/json"<br/>}<br/>} |
| `lastModified`                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                          |
| `version`                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                       | The team version                                                                                                                                                                                                                         | 3                                                                                                                                                                                                                                        |
| `idpSynced`                                                                                                                                                                                                                              | *boolean*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                       | Whether the team has been synced with an external identity provider (IdP). Team sync is available to customers on an Enterprise plan.                                                                                                    | true                                                                                                                                                                                                                                     |
| `roleAttributes`                                                                                                                                                                                                                         | Record<string, *string*[]>                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                          |
| `roles`                                                                                                                                                                                                                                  | [components.TeamCustomRoles](../../models/components/teamcustomroles.md)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                          |
| `members`                                                                                                                                                                                                                                | [components.TeamMembers](../../models/components/teammembers.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                          |
| `projects`                                                                                                                                                                                                                               | [components.TeamProjects](../../models/components/teamprojects.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                          |
| `maintainers`                                                                                                                                                                                                                            | [components.TeamMaintainers](../../models/components/teammaintainers.md)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                          |