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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `deploymentID`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | The deployment ID                                                        |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |