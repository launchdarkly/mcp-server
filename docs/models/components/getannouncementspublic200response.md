# GetAnnouncementsPublic200Response

## Example Usage

```typescript
import { GetAnnouncementsPublic200Response } from "@launchdarkly/mcp-server/models/components";

let value: GetAnnouncementsPublic200Response = {
  items: [
    {
      id: "1234567890",
      isDismissible: true,
      title: "System Maintenance Notice",
      message: "**Important Update:**\n"
        + "\n"
        + "Please be aware of the upcoming maintenance scheduled for *October 31st, 2024*. The system will be unavailable from **12:00 AM** to **4:00 AM**.",
      startTime: 1731439812,
      endTime: 1731439880,
      severity: "info",
      status: "active",
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
        parent: {
          href: "href",
          type: "type",
        },
      },
    },
    {
      id: "1234567890",
      isDismissible: true,
      title: "System Maintenance Notice",
      message: "**Important Update:**\n"
        + "\n"
        + "Please be aware of the upcoming maintenance scheduled for *October 31st, 2024*. The system will be unavailable from **12:00 AM** to **4:00 AM**.",
      startTime: 1731439812,
      endTime: 1731439880,
      severity: "info",
      status: "active",
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
        parent: {
          href: "href",
          type: "type",
        },
      },
    },
  ],
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
};
```

## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                                                                                                                         | [components.AnnouncementResponse](../../models/components/announcementresponse.md)[]                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |                                                                                                                                                                                                                                 |
| `links`                                                                                                                                                                                                                         | [components.AnnouncementPaginatedLinks](../../models/components/announcementpaginatedlinks.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             | {<br/>"next": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"last": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"prev": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"self": {<br/>"href": "href",<br/>"type": "type"<br/>},<br/>"first": {<br/>"href": "href",<br/>"type": "type"<br/>}<br/>} |