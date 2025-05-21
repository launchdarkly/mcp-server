# AIConfigVariationPost

## Example Usage

```typescript
import { AIConfigVariationPost } from "@launchdarkly/mcp-server";

let value: AIConfigVariationPost = {
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
  name: "name",
  modelConfigKey: "modelConfigKey",
  comment: "comment",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `key`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `messages`                                                                   | [models.Message](../models/message.md)[]                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `model`                                                                      | [models.AIConfigVariationPostModel](../models/aiconfigvariationpostmodel.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `modelConfigKey`                                                             | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `comment`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | Human-readable description of this variation                                 |