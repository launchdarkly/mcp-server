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
  tools: [
    {
      key: "key",
      version: 0,
    },
    {
      key: "key",
      version: 0,
    },
  ],
  toolKeys: [
    "toolKeys",
    "toolKeys",
  ],
  judgeConfiguration: {
    judges: [
      {
        judgeConfigKey: "judgeConfigKey",
        samplingRate: 0.7061401,
      },
      {
        judgeConfigKey: "judgeConfigKey",
        samplingRate: 0.7061401,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `comment`                                                                                                                                              | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Human-readable description of this variation                                                                                                           |                                                                                                                                                        |
| `description`                                                                                                                                          | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Returns the description for the agent. This is only returned for agent variations.                                                                     |                                                                                                                                                        |
| `instructions`                                                                                                                                         | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Returns the instructions for the agent. This is only returned for agent variations.                                                                    |                                                                                                                                                        |
| `key`                                                                                                                                                  | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `messages`                                                                                                                                             | [components.Message](../../models/components/message.md)[]                                                                                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `model`                                                                                                                                                | [components.AIConfigVariationPostModel](../../models/components/aiconfigvariationpostmodel.md)                                                         | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `name`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `modelConfigKey`                                                                                                                                       | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `tools`                                                                                                                                                | [components.VariationToolPost](../../models/components/variationtoolpost.md)[]                                                                         | :heavy_minus_sign:                                                                                                                                     | List of tools to use for this variation. The latest version of the tool will be used.                                                                  |                                                                                                                                                        |
| `toolKeys`                                                                                                                                             | *string*[]                                                                                                                                             | :heavy_minus_sign:                                                                                                                                     | List of tool keys to use for this variation. The latest version of the tool will be used.                                                              |                                                                                                                                                        |
| `judgeConfiguration`                                                                                                                                   | [components.JudgeConfiguration](../../models/components/judgeconfiguration.md)                                                                         | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    | {<br/>"judges": [<br/>{<br/>"samplingRate": 0.7061401,<br/>"judgeConfigKey": "judgeConfigKey"<br/>},<br/>{<br/>"samplingRate": 0.7061401,<br/>"judgeConfigKey": "judgeConfigKey"<br/>}<br/>]<br/>} |