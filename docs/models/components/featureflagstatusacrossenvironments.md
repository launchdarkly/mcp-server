# FeatureFlagStatusAcrossEnvironments

## Example Usage

```typescript
import { FeatureFlagStatusAcrossEnvironments } from "@launchdarkly/mcp-server/models/components";

let value: FeatureFlagStatusAcrossEnvironments = {
  environments: {
    "production": {
      name: "inactive",
      lastRequested: new Date("2020-02-05T18:17:01.514Z"),
    },
  },
  key: "flag-key-123abc",
  links: {
    "parent": {
      href: "/api/v2/flag-status",
      type: "application/json",
    },
    "self": {
      href: "/api/v2/flag-status/my-project/my-flag",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `environments`                                                                                                                                                        | Record<string, [components.FeatureFlagStatus](../../models/components/featureflagstatus.md)>                                                                          | :heavy_check_mark:                                                                                                                                                    | Flag status for environment.                                                                                                                                          | {<br/>"production": {<br/>"lastRequested": "2020-02-05T18:17:01.514Z",<br/>"name": "inactive"<br/>}<br/>}                                                             |
| `key`                                                                                                                                                                 | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | feature flag key                                                                                                                                                      | flag-key-123abc                                                                                                                                                       |
| `links`                                                                                                                                                               | Record<string, [components.Link](../../models/components/link.md)>                                                                                                    | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   | {<br/>"parent": {<br/>"href": "/api/v2/flag-status",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/flag-status/my-project/my-flag",<br/>"type": "application/json"<br/>}<br/>} |