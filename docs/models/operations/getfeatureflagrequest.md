# GetFeatureFlagRequest

## Example Usage

```typescript
import { GetFeatureFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetFeatureFlagRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The project key                                                                                   |
| `featureFlagKey`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | The feature flag key                                                                              |
| `env`                                                                                             | *string*                                                                                          | :heavy_minus_sign:                                                                                | Filter configurations by environment                                                              |
| `expand`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | A comma-separated list of fields to expand in the response. Supported fields are explained above. |