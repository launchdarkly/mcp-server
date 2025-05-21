# PatchOAuthClientRequest

## Example Usage

```typescript
import { PatchOAuthClientRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchOAuthClientRequest = {
  clientId: "<value>",
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
| `clientId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The client ID                                                            |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |