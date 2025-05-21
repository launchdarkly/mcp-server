# PatchMemberRequest

## Example Usage

```typescript
import { PatchMemberRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchMemberRequest = {
  id: "<value>",
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
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | The member ID                                             |
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |