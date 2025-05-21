# PatchProjectRequest

## Example Usage

```typescript
import { PatchProjectRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchProjectRequest = {
  projectKey: "<value>",
  requestBody: [
    {
      op: "replace",
      path: "/exampleField",
      value: "new example value",
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `projectKey`                                              | *string*                                                  | :heavy_check_mark:                                        | The project key                                           |
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |