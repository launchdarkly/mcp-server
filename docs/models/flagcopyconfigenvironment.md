# FlagCopyConfigEnvironment

## Example Usage

```typescript
import { FlagCopyConfigEnvironment } from "@launchdarkly/mcp-server";

let value: FlagCopyConfigEnvironment = {
  key: "<key>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                        | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The environment key                                                                                                                          |
| `currentVersion`                                                                                                                             | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Optional flag version. If you include this, the operation only succeeds if the current flag version in the environment matches this version. |