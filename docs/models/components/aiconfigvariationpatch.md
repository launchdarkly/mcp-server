# AIConfigVariationPatch

## Example Usage

```typescript
import { AIConfigVariationPatch } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigVariationPatch = {
  comment: "comment",
  description: "description",
  instructions: "instructions",
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
| `comment`                                                                                                                                              | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Human-readable description of what this patch changes                                                                                                  |                                                                                                                                                        |
| `description`                                                                                                                                          | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Description for agent when AI Config is in agent mode.                                                                                                 |                                                                                                                                                        |
| `instructions`                                                                                                                                         | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Instructions for agent when AI Config is in agent mode.                                                                                                |                                                                                                                                                        |
| `messages`                                                                                                                                             | [components.Message](../../models/components/message.md)[]                                                                                             | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `model`                                                                                                                                                | [components.AIConfigVariationPatchModel](../../models/components/aiconfigvariationpatchmodel.md)                                                       | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `modelConfigKey`                                                                                                                                       | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `name`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `published`                                                                                                                                            | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `state`                                                                                                                                                | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | One of 'archived', 'published'                                                                                                                         |                                                                                                                                                        |
| `tools`                                                                                                                                                | [components.VariationToolPost](../../models/components/variationtoolpost.md)[]                                                                         | :heavy_minus_sign:                                                                                                                                     | List of tools to use for this variation. The latest version of the tool will be used.                                                                  |                                                                                                                                                        |
| `toolKeys`                                                                                                                                             | *string*[]                                                                                                                                             | :heavy_minus_sign:                                                                                                                                     | List of tool keys to use for this variation. The latest version of the tool will be used.                                                              |                                                                                                                                                        |
| `judgeConfiguration`                                                                                                                                   | [components.JudgeConfiguration](../../models/components/judgeconfiguration.md)                                                                         | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    | {<br/>"judges": [<br/>{<br/>"samplingRate": 0.7061401,<br/>"judgeConfigKey": "judgeConfigKey"<br/>},<br/>{<br/>"samplingRate": 0.7061401,<br/>"judgeConfigKey": "judgeConfigKey"<br/>}<br/>]<br/>} |