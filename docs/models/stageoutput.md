# StageOutput

## Example Usage

```typescript
import { StageOutput } from "@launchdarkly/mcp-server";

let value: StageOutput = {
  id: "12ab3c45de678910abc12345",
  name: "10% rollout on day 1",
  conditions: [
    {
      id: "<id>",
      kind: "schedule",
      execution: {
        status: "completed",
      },
      scheduleKind: "relative",
      waitDuration: 2,
      waitDurationUnit: "calendarDay",
      description: "aboard while now round impeccable nephew",
      notifyMemberIds: [
        "<value>",
      ],
      allReviews: [
        {
          id: "<id>",
          kind: "<value>",
        },
      ],
      reviewStatus: "<value>",
    },
  ],
  action: {
    kind: "patch",
    instructions: [
      {
        "key": "<value>",
      },
    ],
  },
  execution: {
    status: "completed",
  },
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             | Example                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                    | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | The ID of this stage                                                                                                                                                                    | 12ab3c45de678910abc12345                                                                                                                                                                |
| `name`                                                                                                                                                                                  | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The stage name                                                                                                                                                                          | 10% rollout on day 1                                                                                                                                                                    |
| `conditions`                                                                                                                                                                            | [models.ConditionOutput](../models/conditionoutput.md)[]                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | An array of conditions for the stage                                                                                                                                                    | [<br/>{<br/>"_execution": {<br/>"status": "completed"<br/>},<br/>"id": "12ab3c45de678910abc12345",<br/>"kind": "schedule",<br/>"scheduleKind": "relative",<br/>"waitDuration": 2,<br/>"waitDurationUnit": "calendarDay"<br/>}<br/>] |
| `action`                                                                                                                                                                                | [models.ActionOutput](../models/actionoutput.md)                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |                                                                                                                                                                                         |
| `execution`                                                                                                                                                                             | [models.ExecutionOutput](../models/executionoutput.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |                                                                                                                                                                                         |