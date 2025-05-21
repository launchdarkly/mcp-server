# GetBranchRequest

## Example Usage

```typescript
import { GetBranchRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetBranchRequest = {
  repo: "<value>",
  branch: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `repo`                                | *string*                              | :heavy_check_mark:                    | The repository name                   |
| `branch`                              | *string*                              | :heavy_check_mark:                    | The url-encoded branch name           |
| `projKey`                             | *string*                              | :heavy_minus_sign:                    | Filter results to a specific project  |
| `flagKey`                             | *string*                              | :heavy_minus_sign:                    | Filter results to a specific flag key |