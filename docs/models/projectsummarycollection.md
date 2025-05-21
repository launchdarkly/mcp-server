# ProjectSummaryCollection

## Example Usage

```typescript
import { ProjectSummaryCollection } from "@launchdarkly/mcp-server";

let value: ProjectSummaryCollection = {
  totalCount: 50880,
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

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `totalCount`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `items`                                                | [models.ProjectSummary](../models/projectsummary.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `links`                                                | Record<string, [models.Link](../models/link.md)>       | :heavy_minus_sign:                                     | N/A                                                    |