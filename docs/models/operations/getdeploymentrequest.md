# GetDeploymentRequest

## Example Usage

```typescript
import { GetDeploymentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetDeploymentRequest = {
  deploymentID: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `deploymentID`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | The deployment ID                                                        |
| `expand`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Expand properties in response. Options: `pullRequests`, `flagReferences` |