# DeleteModelConfigRequest

## Example Usage

```typescript
import { DeleteModelConfigRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteModelConfigRequest = {
  ldAPIVersion: "beta",
  projectKey: "default",
  modelConfigKey: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                       | [operations.DeleteModelConfigLDAPIVersion](../../models/operations/deletemodelconfigldapiversion.md) | :heavy_check_mark:                                                                                   | Version of the endpoint.                                                                             |                                                                                                      |
| `projectKey`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | default                                                                                              |
| `modelConfigKey`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |