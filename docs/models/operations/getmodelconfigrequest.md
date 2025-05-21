# GetModelConfigRequest

## Example Usage

```typescript
import { GetModelConfigRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetModelConfigRequest = {
  ldAPIVersion: "beta",
  projectKey: "default",
  modelConfigKey: "default",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                 | [operations.GetModelConfigLDAPIVersion](../../models/operations/getmodelconfigldapiversion.md) | :heavy_check_mark:                                                                             | Version of the endpoint.                                                                       |                                                                                                |
| `projectKey`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | default                                                                                        |
| `modelConfigKey`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | default                                                                                        |