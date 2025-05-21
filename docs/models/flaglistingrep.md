# FlagListingRep

## Example Usage

```typescript
import { FlagListingRep } from "@launchdarkly/mcp-server";

let value: FlagListingRep = {
  name: "Example flag",
  key: "flag-key-123abc",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `name`                                           | *string*                                         | :heavy_check_mark:                               | The flag name                                    | Example flag                                     |
| `key`                                            | *string*                                         | :heavy_check_mark:                               | The flag key                                     | flag-key-123abc                                  |
| `links`                                          | Record<string, [models.Link](../models/link.md)> | :heavy_minus_sign:                               | N/A                                              |                                                  |
| `site`                                           | [models.Link](../models/link.md)                 | :heavy_minus_sign:                               | N/A                                              |                                                  |