# FlagListingRep

## Example Usage

```typescript
import { FlagListingRep } from "@launchdarkly/mcp-server/models/components";

let value: FlagListingRep = {
  name: "Example flag",
  key: "flag-key-123abc",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The flag name                                                      | Example flag                                                       |
| `key`                                                              | *string*                                                           | :heavy_check_mark:                                                 | The flag key                                                       | flag-key-123abc                                                    |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `site`                                                             | [components.Link](../../models/components/link.md)                 | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |