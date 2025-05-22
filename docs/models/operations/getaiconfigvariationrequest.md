# GetAIConfigVariationRequest

## Example Usage

```typescript
import { GetAIConfigVariationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetAIConfigVariationRequest = {
  ldAPIVersion: "beta",
  projectKey: "default",
  configKey: "default",
  variationKey: "default",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                             | [operations.GetAIConfigVariationLDAPIVersion](../../models/operations/getaiconfigvariationldapiversion.md) | :heavy_check_mark:                                                                                         | Version of the endpoint.                                                                                   |                                                                                                            |
| `projectKey`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | default                                                                                                    |
| `configKey`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | default                                                                                                    |
| `variationKey`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | default                                                                                                    |