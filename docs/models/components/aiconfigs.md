# AIConfigs

## Example Usage

```typescript
import { AIConfigs } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigs = {
  links: {
    first: {
      href: "href",
      type: "type",
    },
    last: {
      href: "href",
      type: "type",
    },
    next: {
      href: "href",
      type: "type",
    },
    prev: {
      href: "href",
      type: "type",
    },
    self: {
      href: "href",
      type: "type",
    },
  },
  items: [
    {
      access: {
        denied: [
          {
            action: "action",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              notResources: [
                "notResources",
                "notResources",
              ],
              actions: [
                "*",
              ],
              notActions: [
                "<value 1>",
                "<value 2>",
              ],
              effect: "allow",
              roleName: "role_name",
            },
          },
          {
            action: "action",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              notResources: [
                "notResources",
                "notResources",
              ],
              actions: [
                "*",
              ],
              notActions: [
                "<value 1>",
                "<value 2>",
              ],
              effect: "allow",
              roleName: "role_name",
            },
          },
        ],
        allowed: [
          {
            action: "action",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              notResources: [
                "notResources",
                "notResources",
              ],
              actions: [
                "*",
              ],
              notActions: [
                "<value 1>",
                "<value 2>",
              ],
              effect: "allow",
              roleName: "role_name",
            },
          },
          {
            action: "action",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              notResources: [
                "notResources",
                "notResources",
              ],
              actions: [
                "*",
              ],
              notActions: [
                "<value 1>",
                "<value 2>",
              ],
              effect: "allow",
              roleName: "role_name",
            },
          },
        ],
      },
      links: {
        self: {
          href: "href",
          type: "type",
        },
        parent: {
          href: "href",
          type: "type",
        },
      },
      site: {
        href: "href",
        type: "type",
      },
      description: "description",
      key: "key",
      maintainer: {
        key: "<key>",
        name: "<value>",
        kind: "kind",
      },
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
      version: 0,
      variations: [
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
      createdAt: 2,
      updatedAt: 4,
      evaluationMetricKey: "evaluationMetricKey",
      evaluationMetricKeys: [
        "evaluationMetricKeys",
        "evaluationMetricKeys",
      ],
      isInverted: true,
      dependencies: [
        {
          type: "agent-graph",
          key: "key",
        },
        {
          type: "agent-graph",
          key: "key",
        },
      ],
    },
    {
      access: {
        denied: [
          {
            action: "action",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              notResources: [
                "notResources",
                "notResources",
              ],
              actions: [
                "*",
              ],
              notActions: [
                "<value 1>",
                "<value 2>",
              ],
              effect: "allow",
              roleName: "role_name",
            },
          },
          {
            action: "action",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              notResources: [
                "notResources",
                "notResources",
              ],
              actions: [
                "*",
              ],
              notActions: [
                "<value 1>",
                "<value 2>",
              ],
              effect: "allow",
              roleName: "role_name",
            },
          },
        ],
        allowed: [
          {
            action: "action",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              notResources: [
                "notResources",
                "notResources",
              ],
              actions: [
                "*",
              ],
              notActions: [
                "<value 1>",
                "<value 2>",
              ],
              effect: "allow",
              roleName: "role_name",
            },
          },
          {
            action: "action",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              notResources: [
                "notResources",
                "notResources",
              ],
              actions: [
                "*",
              ],
              notActions: [
                "<value 1>",
                "<value 2>",
              ],
              effect: "allow",
              roleName: "role_name",
            },
          },
        ],
      },
      links: {
        self: {
          href: "href",
          type: "type",
        },
        parent: {
          href: "href",
          type: "type",
        },
      },
      site: {
        href: "href",
        type: "type",
      },
      description: "description",
      key: "key",
      maintainer: {
        id: "<id>",
        email: "Kassandra_Langosh@yahoo.com",
        role: "<value>",
        kind: "kind",
      },
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
      version: 0,
      variations: [
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
      createdAt: 2,
      updatedAt: 4,
      evaluationMetricKey: "evaluationMetricKey",
      evaluationMetricKeys: [
        "evaluationMetricKeys",
        "evaluationMetricKeys",
      ],
      isInverted: true,
      dependencies: [
        {
          type: "agent-graph",
          key: "key",
        },
        {
          type: "agent-graph",
          key: "key",
        },
      ],
    },
  ],
  totalCount: 7,
};
```

## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                                                                         | [components.PaginatedLinks](../../models/components/paginatedlinks.md)                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             | {<br/>"next": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"last": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"prev": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"self": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"first": {<br/>"href": "href",<br/>"type": "type"<br/>}<br/>} |
| `items`                                                                                                                                                                                                                         | [components.AIConfig](../../models/components/aiconfig.md)[]                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                              | The items on this page                                                                                                                                                                                                          |                                                                                                                                                                                                                                 |
| `totalCount`                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The total number of items                                                                                                                                                                                                       |                                                                                                                                                                                                                                 |