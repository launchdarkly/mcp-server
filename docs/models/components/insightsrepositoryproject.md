# InsightsRepositoryProject

## Example Usage

```typescript
import { InsightsRepositoryProject } from "@launchdarkly/mcp-server/models/components";

let value: InsightsRepositoryProject = {
  repositoryKey: "launchdarkly/LaunchDarkly-Docs",
  projectKey: "default",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `repositoryKey`                | *string*                       | :heavy_check_mark:             | The repository key             | launchdarkly/LaunchDarkly-Docs |
| `projectKey`                   | *string*                       | :heavy_check_mark:             | The project key                | default                        |