# UpdateSubscriptionRequest

## Example Usage

```typescript
import { UpdateSubscriptionRequest } from "@launchdarkly/mcp-server/models/operations";

let value: UpdateSubscriptionRequest = {
  integrationKey: "<value>",
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
| `integrationKey`                                          | *string*                                                  | :heavy_check_mark:                                        | The integration key                                       |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | The ID of the audit log subscription                      |
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |