# UserFlagSettings

## Example Usage

```typescript
import { UserFlagSettings } from "@launchdarkly/mcp-server";

let value: UserFlagSettings = {
  items: {
    "alternate.page": {
      links: {
        "self": {
          href:
            "/api/v2/users/lacuna/production/Abbie_Braun/flags/alternate.page",
          type: "application/json",
        },
      },
      value: false,
      setting: null,
    },
    "sort.order": {
      links: {
        "self": {
          href: "/api/v2/users/lacuna/production/Abbie_Braun/flags/sort.order",
          type: "application/json",
        },
      },
      value: true,
      setting: null,
    },
  },
  links: {
    "self": {
      href: "/api/v2/users/lacuna/production/Abbie_Braun/flags",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                                                                                                                                                                                                                                                                       | Record<string, [models.UserFlagSetting](../models/userflagsetting.md)>                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                            | An array of flag settings for the user                                                                                                                                                                                                                                                                                                                                        | {<br/>"alternate.page": {<br/>"_links": {<br/>"self": {<br/>"href": "/api/v2/users/lacuna/production/Abbie_Braun/flags/alternate.page",<br/>"type": "application/json"<br/>}<br/>},<br/>"_value": false,<br/>"setting": null<br/>},<br/>"sort.order": {<br/>"_links": {<br/>"self": {<br/>"href": "/api/v2/users/lacuna/production/Abbie_Braun/flags/sort.order",<br/>"type": "application/json"<br/>}<br/>},<br/>"_value": true,<br/>"setting": null<br/>}<br/>} |
| `links`                                                                                                                                                                                                                                                                                                                                                                       | Record<string, [models.Link](../models/link.md)>                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                            | The location and content type of related resources                                                                                                                                                                                                                                                                                                                            | {<br/>"self": {<br/>"href": "/api/v2/users/lacuna/production/Abbie_Braun/flags",<br/>"type": "application/json"<br/>}<br/>}                                                                                                                                                                                                                                                   |