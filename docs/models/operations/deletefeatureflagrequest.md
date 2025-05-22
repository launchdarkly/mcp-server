# DeleteFeatureFlagRequest

## Example Usage

```typescript
import { DeleteFeatureFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteFeatureFlagRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `projectKey`                                                    | *string*                                                        | :heavy_check_mark:                                              | The project key                                                 |
| `featureFlagKey`                                                | *string*                                                        | :heavy_check_mark:                                              | The feature flag key. The key identifies the flag in your code. |