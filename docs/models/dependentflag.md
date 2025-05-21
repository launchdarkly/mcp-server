# DependentFlag

## Example Usage

```typescript
import { DependentFlag } from "@launchdarkly/mcp-server";

let value: DependentFlag = {
  name: "Example dependent flag",
  key: "dependent-flag-key-123abc",
  links: {
    "key": {},
  },
  site: {},
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_minus_sign:                                 | The flag name                                      | Example dependent flag                             |
| `key`                                              | *string*                                           | :heavy_check_mark:                                 | The flag key                                       | dependent-flag-key-123abc                          |
| `links`                                            | Record<string, [models.Link](../models/link.md)>   | :heavy_check_mark:                                 | The location and content type of related resources |                                                    |
| `site`                                             | [models.Link](../models/link.md)                   | :heavy_check_mark:                                 | N/A                                                |                                                    |