# DeleteAIConfigRequest

## Example Usage

```typescript
import { DeleteAIConfigRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteAIConfigRequest = {
  ldAPIVersion: "beta",
  projectKey: "default",
  configKey: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                 | [operations.DeleteAIConfigLDAPIVersion](../../models/operations/deleteaiconfigldapiversion.md) | :heavy_check_mark:                                                                             | Version of the endpoint.                                                                       |                                                                                                |
| `projectKey`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | default                                                                                        |
| `configKey`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |