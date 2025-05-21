# AnnouncementPaginatedLinks

## Example Usage

```typescript
import { AnnouncementPaginatedLinks } from "@launchdarkly/mcp-server/models/components";

let value: AnnouncementPaginatedLinks = {
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `first`                                                                    | [components.AnnouncementLink](../../models/components/announcementlink.md) | :heavy_minus_sign:                                                         | N/A                                                                        | {<br/>"href": "href",<br/>"type": "type"<br/>}                             |
| `last`                                                                     | [components.AnnouncementLink](../../models/components/announcementlink.md) | :heavy_minus_sign:                                                         | N/A                                                                        | {<br/>"href": "href",<br/>"type": "type"<br/>}                             |
| `next`                                                                     | [components.AnnouncementLink](../../models/components/announcementlink.md) | :heavy_minus_sign:                                                         | N/A                                                                        | {<br/>"href": "href",<br/>"type": "type"<br/>}                             |
| `prev`                                                                     | [components.AnnouncementLink](../../models/components/announcementlink.md) | :heavy_minus_sign:                                                         | N/A                                                                        | {<br/>"href": "href",<br/>"type": "type"<br/>}                             |
| `self`                                                                     | [components.AnnouncementLink](../../models/components/announcementlink.md) | :heavy_check_mark:                                                         | N/A                                                                        | {<br/>"href": "href",<br/>"type": "type"<br/>}                             |