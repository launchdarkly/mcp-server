# TeamProjects

## Example Usage

```typescript
import { TeamProjects } from "@launchdarkly/mcp-server/models/components";

let value: TeamProjects = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       | 1                                                                                                                                                                                                                                                                         |
| `items`                                                                                                                                                                                                                                                                   | [components.ProjectSummary](../../models/components/projectsummary.md)[]                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Details on each project where team members have write privileges on at least one resource type (e.g. flags)                                                                                                                                                               | [<br/>{<br/>"_links": {<br/>"environments": {<br/>"href": "/api/v2/projects/example-project/environments",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/projects/example-project",<br/>"type": "application/json"<br/>}<br/>},<br/>"key": "project-key-123abc",<br/>"name": "Example project"<br/>}<br/>] |