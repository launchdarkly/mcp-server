# PostFlagConfigScheduledChangesRequest

## Example Usage

```typescript
import { PostFlagConfigScheduledChangesRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostFlagConfigScheduledChangesRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  postFlagScheduledChangesInput: {
    comment: "optional comment",
    executionDate: 383576,
    instructions: [
      {
        "key": "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The project key                                                                                                |
| `featureFlagKey`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The feature flag key                                                                                           |
| `environmentKey`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The environment key                                                                                            |
| `ignoreConflicts`                                                                                              | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Whether to succeed (`true`) or fail (`false`) when these instructions conflict with existing scheduled changes |
| `postFlagScheduledChangesInput`                                                                                | [components.PostFlagScheduledChangesInput](../../models/components/postflagscheduledchangesinput.md)           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |