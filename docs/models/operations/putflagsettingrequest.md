# PutFlagSettingRequest

## Example Usage

```typescript
import { PutFlagSettingRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PutFlagSettingRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  userKey: "<value>",
  featureFlagKey: "<value>",
  valuePut: {
    setting: "existing_variation_value_to_use",
    comment: "make sure this context experiences a specific variation",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `projectKey`                                | *string*                                    | :heavy_check_mark:                          | The project key                             |
| `environmentKey`                            | *string*                                    | :heavy_check_mark:                          | The environment key                         |
| `userKey`                                   | *string*                                    | :heavy_check_mark:                          | The user key                                |
| `featureFlagKey`                            | *string*                                    | :heavy_check_mark:                          | The feature flag key                        |
| `valuePut`                                  | [models.ValuePut](../../models/valueput.md) | :heavy_check_mark:                          | N/A                                         |