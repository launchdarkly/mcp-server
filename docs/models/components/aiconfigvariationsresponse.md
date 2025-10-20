# AIConfigVariationsResponse

## Example Usage

```typescript
import { AIConfigVariationsResponse } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigVariationsResponse = {
  items: [
    {
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
    },
    {
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
    },
  ],
  totalCount: 0,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [components.AIConfigVariation](../../models/components/aiconfigvariation.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `totalCount`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |