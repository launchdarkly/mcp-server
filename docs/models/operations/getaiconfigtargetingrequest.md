# GetAIConfigTargetingRequest

## Example Usage

```typescript
import { GetAIConfigTargetingRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetAIConfigTargetingRequest = {
  ldAPIVersion: "beta",
  projectKey: "<value>",
  configKey: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                             | [operations.GetAIConfigTargetingLDAPIVersion](../../models/operations/getaiconfigtargetingldapiversion.md) | :heavy_check_mark:                                                                                         | Version of the endpoint.                                                                                   |
| `projectKey`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `configKey`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |