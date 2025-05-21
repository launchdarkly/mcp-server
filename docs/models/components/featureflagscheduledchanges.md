# FeatureFlagScheduledChanges

## Example Usage

```typescript
import { FeatureFlagScheduledChanges } from "@launchdarkly/mcp-server/models/components";

let value: FeatureFlagScheduledChanges = {
  items: [
    {
      id: "<id>",
      creationDate: 173706,
      maintainerId: "12ab3c45de678910abc12345",
      version: 1,
      executionDate: 906056,
      instructions: [
        {
          "key": "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `items`                                                                                          | [components.FeatureFlagScheduledChange](../../models/components/featureflagscheduledchange.md)[] | :heavy_check_mark:                                                                               | Array of scheduled changes                                                                       |
| `links`                                                                                          | Record<string, [components.Link](../../models/components/link.md)>                               | :heavy_minus_sign:                                                                               | The location and content type of related resources                                               |