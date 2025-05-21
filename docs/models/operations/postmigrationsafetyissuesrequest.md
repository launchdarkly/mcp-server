# PostMigrationSafetyIssuesRequest

## Example Usage

```typescript
import { PostMigrationSafetyIssuesRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostMigrationSafetyIssuesRequest = {
  projectKey: "<value>",
  flagKey: "<value>",
  environmentKey: "<value>",
  flagSempatch: {
    instructions: [
      {
        "key": "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `projectKey`                                        | *string*                                            | :heavy_check_mark:                                  | The project key                                     |
| `flagKey`                                           | *string*                                            | :heavy_check_mark:                                  | The migration flag key                              |
| `environmentKey`                                    | *string*                                            | :heavy_check_mark:                                  | The environment key                                 |
| `flagSempatch`                                      | [models.FlagSempatch](../../models/flagsempatch.md) | :heavy_check_mark:                                  | N/A                                                 |