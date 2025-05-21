# CustomWorkflowInput

## Example Usage

```typescript
import { CustomWorkflowInput } from "@launchdarkly/mcp-server";

let value: CustomWorkflowInput = {
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
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `maintainerId`                                 | *string*                                       | :heavy_minus_sign:                             | N/A                                            |                                                |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The workflow name                              | Progressive rollout starting in two days       |
| `description`                                  | *string*                                       | :heavy_minus_sign:                             | The workflow description                       | Turn flag on for 10% of users each day         |
| `stages`                                       | [models.StageInput](../models/stageinput.md)[] | :heavy_minus_sign:                             | A list of the workflow stages                  |                                                |
| `templateKey`                                  | *string*                                       | :heavy_minus_sign:                             | The template key                               |                                                |