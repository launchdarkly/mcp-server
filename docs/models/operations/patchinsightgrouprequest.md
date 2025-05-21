# PatchInsightGroupRequest

## Example Usage

```typescript
import { PatchInsightGroupRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchInsightGroupRequest = {
  insightGroupKey: "<value>",
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
| `insightGroupKey`                                         | *string*                                                  | :heavy_check_mark:                                        | The insight group key                                     |
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |