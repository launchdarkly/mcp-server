# DeleteAIConfigVariationRequest

## Example Usage

```typescript
import { DeleteAIConfigVariationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteAIConfigVariationRequest = {
  ldAPIVersion: "beta",
  projectKey: "<value>",
  configKey: "<value>",
  variationKey: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                                   | [operations.DeleteAIConfigVariationLDAPIVersion](../../models/operations/deleteaiconfigvariationldapiversion.md) | :heavy_check_mark:                                                                                               | Version of the endpoint.                                                                                         |
| `projectKey`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `configKey`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `variationKey`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |