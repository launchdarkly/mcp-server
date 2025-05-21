# FlagStatusRep

## Example Usage

```typescript
import { FlagStatusRep } from "@launchdarkly/mcp-server";

let value: FlagStatusRep = {
  name: "inactive",
  lastRequested: new Date("2020-02-05T18:17:01.514Z"),
  links: {
    "parent": {
      href: "/api/v2/flags/my-project/my-flag",
      type: "application/json",
    },
    "self": {
      href: "/api/v2/flag-statuses/my-project/my-flag",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          | Example                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                                               | [models.FlagStatusRepName](../models/flagstatusrepname.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                                   | Status of the flag                                                                                                                                                                   | inactive                                                                                                                                                                             |
| `lastRequested`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Timestamp of last time flag was requested                                                                                                                                            | 2020-02-05T18:17:01.514Z                                                                                                                                                             |
| `default`                                                                                                                                                                            | *any*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                   | Default value seen from code                                                                                                                                                         |                                                                                                                                                                                      |
| `links`                                                                                                                                                                              | Record<string, [models.Link](../models/link.md)>                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  | {<br/>"parent": {<br/>"href": "/api/v2/flags/my-project/my-flag",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/flag-statuses/my-project/my-flag",<br/>"type": "application/json"<br/>}<br/>} |