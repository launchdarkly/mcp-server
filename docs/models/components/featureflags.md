# FeatureFlags

## Example Usage

```typescript
import { FeatureFlags } from "@launchdarkly/mcp-server/models/components";

let value: FeatureFlags = {
  items: [],
  links: {
    "self": {
      href: "/api/v2/flags/default",
      type: "application/json",
    },
  },
  totalCount: 1,
  totalCountWithDifferences: 0,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                                                    | [components.FeatureFlag](../../models/components/featureflag.md)[]                                                                         | :heavy_check_mark:                                                                                                                         | An array of feature flags                                                                                                                  |                                                                                                                                            |
| `links`                                                                                                                                    | Record<string, [components.Link](../../models/components/link.md)>                                                                         | :heavy_check_mark:                                                                                                                         | The location and content type of related resources                                                                                         | {<br/>"self": {<br/>"href": "/api/v2/flags/default",<br/>"type": "application/json"<br/>}<br/>}                                            |
| `totalCount`                                                                                                                               | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The total number of flags                                                                                                                  | 1                                                                                                                                          |
| `totalCountWithDifferences`                                                                                                                | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The number of flags that have differences between environments. Only shown when query parameter <code>compare</code> is <code>true</code>. | 0                                                                                                                                          |