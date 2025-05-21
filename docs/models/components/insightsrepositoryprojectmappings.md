# InsightsRepositoryProjectMappings

## Example Usage

```typescript
import { InsightsRepositoryProjectMappings } from "@launchdarkly/mcp-server/models/components";

let value: InsightsRepositoryProjectMappings = {
  mappings: [
    {
      repositoryKey: "launchdarkly/LaunchDarkly-Docs",
      projectKey: "default",
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `mappings`                                                                                     | [components.InsightsRepositoryProject](../../models/components/insightsrepositoryproject.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |