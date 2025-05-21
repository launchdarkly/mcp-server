# PatchReleaseByFlagKeyRequest

## Example Usage

```typescript
import { PatchReleaseByFlagKeyRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchReleaseByFlagKeyRequest = {
  projectKey: "<value>",
  flagKey: "<value>",
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
| `projectKey`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | The project key                                                          |
| `flagKey`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | The flag key                                                             |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |