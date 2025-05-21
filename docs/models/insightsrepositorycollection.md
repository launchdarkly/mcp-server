# InsightsRepositoryCollection

## Example Usage

```typescript
import { InsightsRepositoryCollection } from "@launchdarkly/mcp-server";

let value: InsightsRepositoryCollection = {
  totalCount: 1,
  items: [
    {
      id: "5f9a9b1a-5b9a-4b9a-9a9a-9a9a9a9a9a9a",
      version: 1,
      key: "launchdarkly/LaunchDarkly-Docs",
      type: "github",
      url: "https://github.com/launchdarkly/LaunchDarkly-Docs",
      mainBranch: "main",
      projects: {
        totalCount: 819003,
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `totalCount`                                                   | *number*                                                       | :heavy_check_mark:                                             | Total number of repositories                                   | 1                                                              |
| `items`                                                        | [models.InsightsRepository](../models/insightsrepository.md)[] | :heavy_check_mark:                                             | List of repositories                                           |                                                                |
| `links`                                                        | Record<string, [models.Link](../models/link.md)>               | :heavy_minus_sign:                                             | The location and content type of related resources             |                                                                |