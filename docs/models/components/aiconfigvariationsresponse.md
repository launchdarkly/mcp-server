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