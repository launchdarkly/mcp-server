# AnnouncementResponseLinks

## Example Usage

```typescript
import { AnnouncementResponseLinks } from "@launchdarkly/mcp-server/models/components";

let value: AnnouncementResponseLinks = {
  parent: {
    href: "href",
    type: "type",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `parent`                                                                   | [components.AnnouncementLink](../../models/components/announcementlink.md) | :heavy_check_mark:                                                         | N/A                                                                        | {<br/>"href": "href",<br/>"type": "type"<br/>}                             |