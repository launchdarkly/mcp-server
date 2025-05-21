# InsightsRepositoryProjectMappings

## Example Usage

```typescript
import { InsightsRepositoryProjectMappings } from "@launchdarkly/mcp-server";

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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `mappings`                                                                   | [models.InsightsRepositoryProject](../models/insightsrepositoryproject.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |