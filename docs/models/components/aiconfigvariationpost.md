# AIConfigVariationPost

## Example Usage

```typescript
import { AIConfigVariationPost } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigVariationPost = {
  comment: "comment",
  description: "description",
  instructions: "instructions",
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `comment`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Human-readable description of this variation                                                   |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Returns the description for the agent. This is only returned for agent variations.             |
| `instructions`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | Returns the instructions for the agent. This is only returned for agent variations.            |
| `key`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `messages`                                                                                     | [components.Message](../../models/components/message.md)[]                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `model`                                                                                        | [components.AIConfigVariationPostModel](../../models/components/aiconfigvariationpostmodel.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modelConfigKey`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |