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
  description: "description",
  instructions: "instructions",
  key: "key",
  id: "_id",
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
  tools: [
    {
      key: "key",
      version: 2,
    },
    {
      key: "key",
      version: 2,
    },
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
  judgingConfigKeys: [
    "judgingConfigKeys",
    "judgingConfigKeys",
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `links`                                                                                                                                                | [components.ParentLink](../../models/components/parentlink.md)                                                                                         | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    | {<br/>"parent": {<br/>"href": "href",<br/>"type": "type"<br/>}<br/>}                                                                                   |
| `color`                                                                                                                                                | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `comment`                                                                                                                                              | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `description`                                                                                                                                          | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Returns the description for the agent. This is only returned for agent variations.                                                                     |                                                                                                                                                        |
| `instructions`                                                                                                                                         | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | Returns the instructions for the agent. This is only returned for agent variations.                                                                    |                                                                                                                                                        |
| `key`                                                                                                                                                  | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `messages`                                                                                                                                             | [components.Message](../../models/components/message.md)[]                                                                                             | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `model`                                                                                                                                                | [components.AIConfigVariationModel](../../models/components/aiconfigvariationmodel.md)                                                                 | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `modelConfigKey`                                                                                                                                       | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `name`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `createdAt`                                                                                                                                            | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `version`                                                                                                                                              | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `state`                                                                                                                                                | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `archivedAt`                                                                                                                                           | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `publishedAt`                                                                                                                                          | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `tools`                                                                                                                                                | [components.VariationTool](../../models/components/variationtool.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `judgeConfiguration`                                                                                                                                   | [components.JudgeConfiguration](../../models/components/judgeconfiguration.md)                                                                         | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    | {<br/>"judges": [<br/>{<br/>"samplingRate": 0.7061401,<br/>"judgeConfigKey": "judgeConfigKey"<br/>},<br/>{<br/>"samplingRate": 0.7061401,<br/>"judgeConfigKey": "judgeConfigKey"<br/>}<br/>]<br/>} |
| `judgingConfigKeys`                                                                                                                                    | *string*[]                                                                                                                                             | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |