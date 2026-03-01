# Defaults

## Example Usage

```typescript
import { Defaults } from "@launchdarkly/mcp-server/models/components";

let value: Defaults = {
  onVariation: 0,
  offVariation: 1,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `onVariation`                                                                                                      | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The index, from the array of variations for this flag, of the variation to serve by default when targeting is on.  | 0                                                                                                                  |
| `offVariation`                                                                                                     | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The index, from the array of variations for this flag, of the variation to serve by default when targeting is off. | 1                                                                                                                  |