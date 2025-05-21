# PatchApplicationVersionRequest

## Example Usage

```typescript
import { PatchApplicationVersionRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchApplicationVersionRequest = {
  applicationKey: "<value>",
  versionKey: "<value>",
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
| `applicationKey`                                          | *string*                                                  | :heavy_check_mark:                                        | The application key                                       |
| `versionKey`                                              | *string*                                                  | :heavy_check_mark:                                        | The application version key                               |
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |