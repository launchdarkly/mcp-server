# CopyFeatureFlagRequest

## Example Usage

```typescript
import { CopyFeatureFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CopyFeatureFlagRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  flagCopyConfigPost: {
    source: {
      key: "<key>",
    },
    target: {
      key: "<key>",
    },
    includedActions: [
      "updateOn",
    ],
    excludedActions: [
      "updateOn",
    ],
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `projectKey`                                                    | *string*                                                        | :heavy_check_mark:                                              | The project key                                                 |
| `featureFlagKey`                                                | *string*                                                        | :heavy_check_mark:                                              | The feature flag key. The key identifies the flag in your code. |
| `flagCopyConfigPost`                                            | [models.FlagCopyConfigPost](../../models/flagcopyconfigpost.md) | :heavy_check_mark:                                              | N/A                                                             |