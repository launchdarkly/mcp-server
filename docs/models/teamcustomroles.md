# TeamCustomRoles

## Example Usage

```typescript
import { TeamCustomRoles } from "@launchdarkly/mcp-server";

let value: TeamCustomRoles = {
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                    | *number*                                                                                        | :heavy_minus_sign:                                                                              | The number of custom roles assigned to this team                                                | 1                                                                                               |
| `items`                                                                                         | [models.TeamCustomRole](../models/teamcustomrole.md)[]                                          | :heavy_minus_sign:                                                                              | An array of the custom roles that have been assigned to this team                               |                                                                                                 |
| `links`                                                                                         | Record<string, [models.Link](../models/link.md)>                                                | :heavy_minus_sign:                                                                              | The location and content type of related resources                                              | {<br/>"self": {<br/>"href": "/api/v2/teams/example-team/roles?limit=25",<br/>"type": "application/json"<br/>}<br/>} |