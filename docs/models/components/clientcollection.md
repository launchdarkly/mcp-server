# ClientCollection

## Example Usage

```typescript
import { ClientCollection } from "@launchdarkly/mcp-server/models/components";

let value: ClientCollection = {
  links: {
    "self": {
      href: "/api/v2/oauth/clients",
      type: "application/json",
    },
  },
  items: [
    {
      links: {
        "parent": {
          href: "/api/v2/oauth/clients",
          type: "application/json",
        },
        "self": {
          href: "/api/v2/oauth/clients/50666563-9144-4125-b822-33f308227e45",
          type: "application/json",
        },
      },
      name: "<value>",
      accountId: "<id>",
      clientId: "<id>",
      redirectUri: "https://astonishing-fishery.org/",
      creationDate: 266016,
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `links`                                                                     | Record<string, [components.Link](../../models/components/link.md)>          | :heavy_check_mark:                                                          | The location and content type of related resources                          | {<br/>"self": {<br/>"href": "/api/v2/oauth/clients",<br/>"type": "application/json"<br/>}<br/>} |
| `items`                                                                     | [components.Client](../../models/components/client.md)[]                    | :heavy_check_mark:                                                          | List of client objects                                                      |                                                                             |