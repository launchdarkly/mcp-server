# TeamCustomRole

## Example Usage

```typescript
import { TeamCustomRole } from "@launchdarkly/mcp-server/models/components";

let value: TeamCustomRole = {
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `key`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | The key of the custom role                                         | role-key-123abc                                                    |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The name of the custom role                                        | Example role                                                       |
| `projects`                                                         | [components.TeamProjects](../../models/components/teamprojects.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `appliedOn`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |