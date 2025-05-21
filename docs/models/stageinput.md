# StageInput

## Example Usage

```typescript
import { StageInput } from "@launchdarkly/mcp-server";

let value: StageInput = {
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The stage name                                                                                               | 10% rollout on day 1                                                                                         |
| `executeConditionsInSequence`                                                                                | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Whether to execute the conditions in sequence for the given stage                                            | true                                                                                                         |
| `conditions`                                                                                                 | [models.ConditionInput](../models/conditioninput.md)[]                                                       | :heavy_minus_sign:                                                                                           | An array of conditions for the stage                                                                         | [<br/>{<br/>"kind": "schedule",<br/>"scheduleKind": "relative",<br/>"waitDuration": 2,<br/>"waitDurationUnit": "calendarDay"<br/>}<br/>] |
| `action`                                                                                                     | [models.ActionInput](../models/actioninput.md)                                                               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |