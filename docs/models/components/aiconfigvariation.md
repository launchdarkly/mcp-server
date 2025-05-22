# AIConfigVariation

## Example Usage

```typescript
import { AIConfigVariation } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigVariation = {
  links: {
    parent: {
      href: "href",
      type: "type",
    },
  },
  color: "color",
  comment: "comment",
  key: "key",
  messages: [
    {
      content: "content",
      role: "role",
    },
    {
      content: "content",
      role: "role",
    },
  ],
  model: {},
  modelConfigKey: "modelConfigKey",
  name: "name",
  createdAt: 6,
  version: 1,
  state: "state",
  archivedAt: 5,
  publishedAt: 5,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `links`                                                                                | [components.ParentLink](../../models/components/parentlink.md)                         | :heavy_minus_sign:                                                                     | N/A                                                                                    | {<br/>"parent": {<br/>"href": "href",<br/>"type": "type"<br/>}<br/>}                   |
| `color`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `comment`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `messages`                                                                             | [components.Message](../../models/components/message.md)[]                             | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `model`                                                                                | [components.AIConfigVariationModel](../../models/components/aiconfigvariationmodel.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `modelConfigKey`                                                                       | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `createdAt`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `version`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `state`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `archivedAt`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `publishedAt`                                                                          | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |