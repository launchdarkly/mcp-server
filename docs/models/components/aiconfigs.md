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
                null,
                null,
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
                null,
                null,
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
                null,
                null,
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
                null,
                null,
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
      createdAt: 2,
      updatedAt: 7,
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
                null,
                null,
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
                null,
                null,
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
                null,
                null,
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
                null,
                null,
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
      createdAt: 2,
      updatedAt: 7,
    },
  ],
  totalCount: 9,
};
```

## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                                                                         | [components.PaginatedLinks](../../models/components/paginatedlinks.md)                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             | {<br/>"next": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"last": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"prev": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"self": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"first": {<br/>"href": "href",<br/>"type": "type"<br/>}<br/>} |
| `items`                                                                                                                                                                                                                         | [components.AIConfig](../../models/components/aiconfig.md)[]                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |                                                                                                                                                                                                                                 |
| `totalCount`                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |                                                                                                                                                                                                                                 |