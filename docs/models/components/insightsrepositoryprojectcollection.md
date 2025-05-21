# InsightsRepositoryProjectCollection

## Example Usage

```typescript
import { InsightsRepositoryProjectCollection } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | Total number of repository project associations                                                | 1                                                                                              |
| `items`                                                                                        | [components.InsightsRepositoryProject](../../models/components/insightsrepositoryproject.md)[] | :heavy_check_mark:                                                                             | List of repository project associations                                                        |                                                                                                |
| `links`                                                                                        | Record<string, [components.Link](../../models/components/link.md)>                             | :heavy_minus_sign:                                                                             | The location and content type of related resources                                             |                                                                                                |