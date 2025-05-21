# InsightsRepositoryProjectCollection

## Example Usage

```typescript
import { InsightsRepositoryProjectCollection } from "@launchdarkly/mcp-server";

let value: InsightsRepositoryProjectCollection = {
  totalCount: 1,
  items: [
    {
      repositoryKey: "launchdarkly/LaunchDarkly-Docs",
      projectKey: "default",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `totalCount`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | Total number of repository project associations                              | 1                                                                            |
| `items`                                                                      | [models.InsightsRepositoryProject](../models/insightsrepositoryproject.md)[] | :heavy_check_mark:                                                           | List of repository project associations                                      |                                                                              |
| `links`                                                                      | Record<string, [models.Link](../models/link.md)>                             | :heavy_minus_sign:                                                           | The location and content type of related resources                           |                                                                              |