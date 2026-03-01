# GetFeatureFlagStatusAcrossEnvironmentsRequest

## Example Usage

```typescript
import { GetFeatureFlagStatusAcrossEnvironmentsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetFeatureFlagStatusAcrossEnvironmentsRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `projectKey`                | *string*                    | :heavy_check_mark:          | The project key             |
| `featureFlagKey`            | *string*                    | :heavy_check_mark:          | The feature flag key        |
| `env`                       | *string*                    | :heavy_minus_sign:          | Optional environment filter |