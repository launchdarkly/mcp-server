# DeleteBranchesRequest

## Example Usage

```typescript
import { DeleteBranchesRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteBranchesRequest = {
  repo: "<value>",
  requestBody: [
    "<value>",
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `repo`                                      | *string*                                    | :heavy_check_mark:                          | The repository name to delete branches for. |
| `requestBody`                               | *string*[]                                  | :heavy_check_mark:                          | N/A                                         |