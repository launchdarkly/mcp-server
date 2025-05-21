# CreateWorkflowTemplateInput

## Example Usage

```typescript
import { CreateWorkflowTemplateInput } from "@launchdarkly/mcp-server";

let value: CreateWorkflowTemplateInput = {
  key: "<key>",
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
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `key`                                          | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `name`                                         | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `description`                                  | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `workflowId`                                   | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `stages`                                       | [models.StageInput](../models/stageinput.md)[] | :heavy_minus_sign:                             | N/A                                            |
| `projectKey`                                   | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `environmentKey`                               | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `flagKey`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            |