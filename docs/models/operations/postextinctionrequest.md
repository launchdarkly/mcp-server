# PostExtinctionRequest

## Example Usage

```typescript
import { PostExtinctionRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostExtinctionRequest = {
  repo: "<value>",
  branch: "<value>",
  requestBody: [
    {
      revision: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
      message: "Remove flag for launched feature",
      time: 494875,
      flagKey: "enable-feature",
      projKey: "default",
    },
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `repo`                                            | *string*                                          | :heavy_check_mark:                                | The repository name                               |
| `branch`                                          | *string*                                          | :heavy_check_mark:                                | The URL-encoded branch name                       |
| `requestBody`                                     | [models.Extinction](../../models/extinction.md)[] | :heavy_check_mark:                                | N/A                                               |