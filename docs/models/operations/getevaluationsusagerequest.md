# GetEvaluationsUsageRequest

## Example Usage

```typescript
import { GetEvaluationsUsageRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetEvaluationsUsageRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  featureFlagKey: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `projectKey`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | The project key                                                                   |
| `environmentKey`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | The environment key                                                               |
| `featureFlagKey`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | The feature flag key                                                              |
| `from`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The series of data returned starts from this timestamp. Defaults to 30 days ago.  |
| `to`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | The series of data returned ends at this timestamp. Defaults to the current time. |
| `tz`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | The timezone to use for breaks between days when returning daily data.            |