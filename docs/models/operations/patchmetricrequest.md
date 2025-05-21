# PatchMetricRequest

## Example Usage

```typescript
import { PatchMetricRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchMetricRequest = {
  projectKey: "<value>",
  metricKey: "<value>",
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
| `metricKey`                                               | *string*                                                  | :heavy_check_mark:                                        | The metric key                                            |
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |