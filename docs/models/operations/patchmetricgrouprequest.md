# PatchMetricGroupRequest

## Example Usage

```typescript
import { PatchMetricGroupRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchMetricGroupRequest = {
  projectKey: "<value>",
  metricGroupKey: "<value>",
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
| `metricGroupKey`                                          | *string*                                                  | :heavy_check_mark:                                        | The metric group key                                      |
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |