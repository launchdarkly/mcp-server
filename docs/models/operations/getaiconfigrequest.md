# GetAIConfigRequest

## Example Usage

```typescript
import { GetAIConfigRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetAIConfigRequest = {
  ldAPIVersion: "beta",
  projectKey: "<value>",
  configKey: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                           | [operations.GetAIConfigLDAPIVersion](../../models/operations/getaiconfigldapiversion.md) | :heavy_check_mark:                                                                       | Version of the endpoint.                                                                 |
| `projectKey`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `configKey`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |