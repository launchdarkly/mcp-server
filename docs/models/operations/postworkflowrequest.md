# PostWorkflowRequest

## Example Usage

```typescript
import { PostWorkflowRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostWorkflowRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  customWorkflowInput: {
    name: "Progressive rollout starting in two days",
    description: "Turn flag on for 10% of users each day",
    stages: [
      {
        name: "10% rollout on day 1",
        executeConditionsInSequence: true,
        conditions: [
          {
            scheduleKind: "relative",
            waitDuration: 2,
            waitDurationUnit: "calendarDay",
            kind: "schedule",
          },
        ],
        action: {
          instructions: "{\"instructions\": [{ \"kind\": \"turnFlagOn\"}]}",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `templateKey`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | The template key to apply as a starting point for the new workflow |
| `dryRun`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether to call the endpoint in dry-run mode                       |
| `projectKey`                                                       | *string*                                                           | :heavy_check_mark:                                                 | The project key                                                    |
| `featureFlagKey`                                                   | *string*                                                           | :heavy_check_mark:                                                 | The feature flag key                                               |
| `environmentKey`                                                   | *string*                                                           | :heavy_check_mark:                                                 | The environment key                                                |
| `customWorkflowInput`                                              | [models.CustomWorkflowInput](../../models/customworkflowinput.md)  | :heavy_check_mark:                                                 | N/A                                                                |