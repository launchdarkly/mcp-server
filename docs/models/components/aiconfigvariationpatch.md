# AIConfigVariationPatch

## Example Usage

```typescript
import { AIConfigVariationPatch } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigVariationPatch = {
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
  published: true,
  state: "state",
  comment: "comment",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `messages`                                                                                       | [components.Message](../../models/components/message.md)[]                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `model`                                                                                          | [components.AIConfigVariationPatchModel](../../models/components/aiconfigvariationpatchmodel.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `modelConfigKey`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `published`                                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `state`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | One of 'archived', 'published'                                                                   |
| `comment`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | Human-readable description of what this patch changes                                            |