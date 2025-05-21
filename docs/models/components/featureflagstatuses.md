# FeatureFlagStatuses

## Example Usage

```typescript
import { FeatureFlagStatuses } from "@launchdarkly/mcp-server/models/components";

let value: FeatureFlagStatuses = {
  links: {
    "self": {
      href: "/api/v2/flag-statuses/my-project/my-environment",
      type: "application/json",
    },
  },
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `links`                                                                                               | Record<string, [components.Link](../../models/components/link.md)>                                    | :heavy_check_mark:                                                                                    | N/A                                                                                                   | {<br/>"self": {<br/>"href": "/api/v2/flag-statuses/my-project/my-environment",<br/>"type": "application/json"<br/>}<br/>} |
| `items`                                                                                               | [components.FlagStatusRep](../../models/components/flagstatusrep.md)[]                                | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |