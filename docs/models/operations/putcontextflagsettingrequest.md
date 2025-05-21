# PutContextFlagSettingRequest

## Example Usage

```typescript
import { PutContextFlagSettingRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PutContextFlagSettingRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  contextKind: "<value>",
  contextKey: "<value>",
  featureFlagKey: "<value>",
  valuePut: {
    setting: "existing_variation_value_to_use",
    comment: "make sure this context experiences a specific variation",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectKey`                                               | *string*                                                   | :heavy_check_mark:                                         | The project key                                            |
| `environmentKey`                                           | *string*                                                   | :heavy_check_mark:                                         | The environment key                                        |
| `contextKind`                                              | *string*                                                   | :heavy_check_mark:                                         | The context kind                                           |
| `contextKey`                                               | *string*                                                   | :heavy_check_mark:                                         | The context key                                            |
| `featureFlagKey`                                           | *string*                                                   | :heavy_check_mark:                                         | The feature flag key                                       |
| `valuePut`                                                 | [components.ValuePut](../../models/components/valueput.md) | :heavy_check_mark:                                         | N/A                                                        |