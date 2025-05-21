# FlagLinkMember

## Example Usage

```typescript
import { FlagLinkMember } from "@launchdarkly/mcp-server/models/components";

let value: FlagLinkMember = {
  links: {
    "key": {},
  },
  id: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_check_mark:                                                 | N/A                                                                |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `firstName`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `lastName`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |