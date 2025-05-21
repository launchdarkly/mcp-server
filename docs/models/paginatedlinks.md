# PaginatedLinks

## Example Usage

```typescript
import { PaginatedLinks } from "@launchdarkly/mcp-server";

let value: PaginatedLinks = {
  first: {
    href: "href",
    type: "type",
  },
  last: {
    href: "href",
    type: "type",
  },
  next: {
    href: "href",
    type: "type",
  },
  prev: {
    href: "href",
    type: "type",
  },
  self: {
    href: "href",
    type: "type",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `first`                                            | [models.AiConfigsLink](../models/aiconfigslink.md) | :heavy_minus_sign:                                 | N/A                                                | {<br/>"href": "href",<br/>"type": "type"<br/>}     |
| `last`                                             | [models.AiConfigsLink](../models/aiconfigslink.md) | :heavy_minus_sign:                                 | N/A                                                | {<br/>"href": "href",<br/>"type": "type"<br/>}     |
| `next`                                             | [models.AiConfigsLink](../models/aiconfigslink.md) | :heavy_minus_sign:                                 | N/A                                                | {<br/>"href": "href",<br/>"type": "type"<br/>}     |
| `prev`                                             | [models.AiConfigsLink](../models/aiconfigslink.md) | :heavy_minus_sign:                                 | N/A                                                | {<br/>"href": "href",<br/>"type": "type"<br/>}     |
| `self`                                             | [models.AiConfigsLink](../models/aiconfigslink.md) | :heavy_check_mark:                                 | N/A                                                | {<br/>"href": "href",<br/>"type": "type"<br/>}     |