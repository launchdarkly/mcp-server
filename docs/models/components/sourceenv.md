# SourceEnv

## Example Usage

```typescript
import { SourceEnv } from "@launchdarkly/mcp-server/models/components";

let value: SourceEnv = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `key`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The key of the source environment to clone from                                                    |
| `version`                                                                                          | *number*                                                                                           | :heavy_minus_sign:                                                                                 | (Optional) The version number of the source environment to clone from. Used for optimistic locking |