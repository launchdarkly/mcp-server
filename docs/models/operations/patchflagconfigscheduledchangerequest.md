# PatchFlagConfigScheduledChangeRequest

## Example Usage

```typescript
import { PatchFlagConfigScheduledChangeRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchFlagConfigScheduledChangeRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  id: "<value>",
  flagScheduledChangesInput: {
    comment: "optional comment",
    instructions: [
      {
        "key": "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `projectKey`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The project key                                                                                                    |
| `featureFlagKey`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The feature flag key                                                                                               |
| `environmentKey`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The environment key                                                                                                |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The scheduled change ID                                                                                            |
| `ignoreConflicts`                                                                                                  | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Whether to succeed (`true`) or fail (`false`) when these new instructions conflict with existing scheduled changes |
| `flagScheduledChangesInput`                                                                                        | [components.FlagScheduledChangesInput](../../models/components/flagscheduledchangesinput.md)                       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |