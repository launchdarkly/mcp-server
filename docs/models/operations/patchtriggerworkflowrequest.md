# PatchTriggerWorkflowRequest

## Example Usage

```typescript
import { PatchTriggerWorkflowRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchTriggerWorkflowRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  featureFlagKey: "<value>",
  id: "<value>",
  flagTriggerInput: {
    comment: "optional comment",
    instructions: [
      {
        "kind": "disableTrigger",
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectKey`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | The project key                                                            |
| `environmentKey`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | The environment key                                                        |
| `featureFlagKey`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | The feature flag key                                                       |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The flag trigger ID                                                        |
| `flagTriggerInput`                                                         | [components.FlagTriggerInput](../../models/components/flagtriggerinput.md) | :heavy_check_mark:                                                         | N/A                                                                        |