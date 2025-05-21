# TagsCollection

## Example Usage

```typescript
import { TagsCollection } from "@launchdarkly/mcp-server";

let value: TagsCollection = {
  items: [
    "ops",
    "pro",
  ],
  links: {
    "key": {
      href: "href",
      type: "type",
    },
  },
  totalCount: 103,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | *string*[]                                               | :heavy_check_mark:                                       | List of tags                                             | [<br/>"ops",<br/>"pro"<br/>]                             |
| `links`                                                  | Record<string, [models.TagsLink](../models/tagslink.md)> | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `totalCount`                                             | *number*                                                 | :heavy_minus_sign:                                       | The total number of tags                                 | 103                                                      |