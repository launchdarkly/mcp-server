# CreateTriggerWorkflowRequest

## Example Usage

```typescript
import { CreateTriggerWorkflowRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateTriggerWorkflowRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  featureFlagKey: "<value>",
  triggerPost: {
    comment: "example comment",
    instructions: [
      {
        "kind": "turnFlagOn",
      },
    ],
    integrationKey: "generic-trigger",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `projectKey`                                      | *string*                                          | :heavy_check_mark:                                | The project key                                   |
| `environmentKey`                                  | *string*                                          | :heavy_check_mark:                                | The environment key                               |
| `featureFlagKey`                                  | *string*                                          | :heavy_check_mark:                                | The feature flag key                              |
| `triggerPost`                                     | [models.TriggerPost](../../models/triggerpost.md) | :heavy_check_mark:                                | N/A                                               |