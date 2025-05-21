# AnnouncementPaginatedLinks

## Example Usage

```typescript
import { AnnouncementPaginatedLinks } from "@launchdarkly/mcp-server";

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

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `first`                                                  | [models.AnnouncementLink](../models/announcementlink.md) | :heavy_minus_sign:                                       | N/A                                                      | {<br/>"href": "href",<br/>"type": "type"<br/>}           |
| `last`                                                   | [models.AnnouncementLink](../models/announcementlink.md) | :heavy_minus_sign:                                       | N/A                                                      | {<br/>"href": "href",<br/>"type": "type"<br/>}           |
| `next`                                                   | [models.AnnouncementLink](../models/announcementlink.md) | :heavy_minus_sign:                                       | N/A                                                      | {<br/>"href": "href",<br/>"type": "type"<br/>}           |
| `prev`                                                   | [models.AnnouncementLink](../models/announcementlink.md) | :heavy_minus_sign:                                       | N/A                                                      | {<br/>"href": "href",<br/>"type": "type"<br/>}           |
| `self`                                                   | [models.AnnouncementLink](../models/announcementlink.md) | :heavy_check_mark:                                       | N/A                                                      | {<br/>"href": "href",<br/>"type": "type"<br/>}           |