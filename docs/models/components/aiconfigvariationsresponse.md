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
      classifiers: [
        {
          key: "key",
          type: "bool",
          instructions: "instructions",
          criteria: "",
        },
        {
          key: "key",
          type: "bool",
          instructions: "instructions",
          criteria: "",
        },
      ],
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
      modelConfigKey: "OpenAI.gpt-4.1",
      modelConfigVersion: 6,
      name: "name",
      outputFormat: {
        "key": "",
      },
      createdAt: 1,
      version: 5,
      state: "published",
      archivedAt: 5,
      publishedAt: 2,
      tools: [
        {
          key: "key",
          version: 7,
          customParameters: {
            "key": "",
          },
        },
        {
          key: "key",
          version: 7,
          customParameters: {
            "key": "",
          },
        },
      ],
      skills: [
        {
          key: "key",
          version: 9,
        },
        {
          key: "key",
          version: 9,
        },
      ],
      judgeConfiguration: {
        judges: [
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.36160767,
          },
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.36160767,
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
      classifiers: [
        {
          key: "key",
          type: "bool",
          instructions: "instructions",
          criteria: "",
        },
        {
          key: "key",
          type: "bool",
          instructions: "instructions",
          criteria: "",
        },
      ],
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
      modelConfigKey: "OpenAI.gpt-4.1",
      modelConfigVersion: 6,
      name: "name",
      outputFormat: {
        "key": "",
      },
      createdAt: 1,
      version: 5,
      state: "published",
      archivedAt: 5,
      publishedAt: 2,
      tools: [
        {
          key: "key",
          version: 7,
          customParameters: {
            "key": "",
          },
        },
        {
          key: "key",
          version: 7,
          customParameters: {
            "key": "",
          },
        },
      ],
      skills: [
        {
          key: "key",
          version: 9,
        },
        {
          key: "key",
          version: 9,
        },
      ],
      judgeConfiguration: {
        judges: [
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.36160767,
          },
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.36160767,
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
| `items`                                                                        | [components.AIConfigVariation](../../models/components/aiconfigvariation.md)[] | :heavy_check_mark:                                                             | The items on this page                                                         |
| `totalCount`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | The total number of items                                                      |