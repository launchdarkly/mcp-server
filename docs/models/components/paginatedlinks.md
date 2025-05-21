# PaginatedLinks

## Example Usage

```typescript
import { PaginatedLinks } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `first`                                                              | [components.AiConfigsLink](../../models/components/aiconfigslink.md) | :heavy_minus_sign:                                                   | N/A                                                                  | {<br/>"href": "href",<br/>"type": "type"<br/>}                       |
| `last`                                                               | [components.AiConfigsLink](../../models/components/aiconfigslink.md) | :heavy_minus_sign:                                                   | N/A                                                                  | {<br/>"href": "href",<br/>"type": "type"<br/>}                       |
| `next`                                                               | [components.AiConfigsLink](../../models/components/aiconfigslink.md) | :heavy_minus_sign:                                                   | N/A                                                                  | {<br/>"href": "href",<br/>"type": "type"<br/>}                       |
| `prev`                                                               | [components.AiConfigsLink](../../models/components/aiconfigslink.md) | :heavy_minus_sign:                                                   | N/A                                                                  | {<br/>"href": "href",<br/>"type": "type"<br/>}                       |
| `self`                                                               | [components.AiConfigsLink](../../models/components/aiconfigslink.md) | :heavy_check_mark:                                                   | N/A                                                                  | {<br/>"href": "href",<br/>"type": "type"<br/>}                       |