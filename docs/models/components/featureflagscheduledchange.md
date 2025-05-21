# FeatureFlagScheduledChange

## Example Usage

```typescript
import { FeatureFlagScheduledChange } from "@launchdarkly/mcp-server/models/components";

let value: FeatureFlagScheduledChange = {
  id: "<id>",
  creationDate: 633087,
  maintainerId: "12ab3c45de678910abc12345",
  version: 1,
  executionDate: 568110,
  instructions: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `creationDate`                                                     | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `maintainerId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | The ID of the scheduled change maintainer                          | 12ab3c45de678910abc12345                                           |
| `version`                                                          | *number*                                                           | :heavy_check_mark:                                                 | Version of the scheduled change                                    | 1                                                                  |
| `executionDate`                                                    | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `instructions`                                                     | Record<string, *any*>[]                                            | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `conflicts`                                                        | *any*                                                              | :heavy_minus_sign:                                                 | Details on any conflicting scheduled changes                       |                                                                    |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_minus_sign:                                                 | The location and content type of related resources                 |                                                                    |