# UpdateDeploymentRequest

## Example Usage

```typescript
import { UpdateDeploymentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: UpdateDeploymentRequest = {
  deploymentID: "<value>",
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
| `deploymentID`                                            | *string*                                                  | :heavy_check_mark:                                        | The deployment ID                                         |
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |