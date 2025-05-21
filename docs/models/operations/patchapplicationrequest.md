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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `applicationKey`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | The application key                                                      |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |