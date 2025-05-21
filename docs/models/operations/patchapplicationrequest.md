# PatchApplicationRequest

## Example Usage

```typescript
import { PatchApplicationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchApplicationRequest = {
  applicationKey: "<value>",
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
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |