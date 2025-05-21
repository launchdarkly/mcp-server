# InsightsRepository

## Example Usage

```typescript
import { InsightsRepository } from "@launchdarkly/mcp-server/models/components";

let value: InsightsRepository = {
  id: "5f9a9b1a-5b9a-4b9a-9a9a-9a9a9a9a9a9a",
  version: 1,
  key: "launchdarkly/LaunchDarkly-Docs",
  type: "github",
  url: "https://github.com/launchdarkly/LaunchDarkly-Docs",
  mainBranch: "main",
  projects: {
    totalCount: 202053,
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The repository ID                                                                          | 5f9a9b1a-5b9a-4b9a-9a9a-9a9a9a9a9a9a                                                       |
| `version`                                                                                  | *number*                                                                                   | :heavy_check_mark:                                                                         | The repository version                                                                     | 1                                                                                          |
| `key`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | The repository key                                                                         | launchdarkly/LaunchDarkly-Docs                                                             |
| `type`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The repository type                                                                        | github                                                                                     |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | The repository URL                                                                         | https://github.com/launchdarkly/LaunchDarkly-Docs                                          |
| `mainBranch`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | The repository main branch                                                                 | main                                                                                       |
| `projects`                                                                                 | [components.ProjectSummaryCollection](../../models/components/projectsummarycollection.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |