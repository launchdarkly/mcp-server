# ConditionInput

## Example Usage

```typescript
import { ConditionInput } from "@launchdarkly/mcp-server";

let value: ConditionInput = {
  waitDuration: 2,
  executeNow: false,
  description: "Require example-team approval for final stage",
  notifyMemberIds: [
    "507f1f77bcf86cd799439011",
  ],
  notifyTeamKeys: [
    "example-team",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `scheduleKind`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `executionDate`                                                                                          | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `waitDuration`                                                                                           | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | For workflow stages whose scheduled execution is relative, how far in the future the stage should start. | 2                                                                                                        |
| `waitDurationUnit`                                                                                       | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `executeNow`                                                                                             | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether the workflow stage should be executed immediately                                                | false                                                                                                    |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | A description of the approval required for this stage                                                    | Require example-team approval for final stage                                                            |
| `notifyMemberIds`                                                                                        | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | A list of member IDs for the members to request approval from for this stage                             | [<br/>"507f1f77bcf86cd799439011"<br/>]                                                                   |
| `notifyTeamKeys`                                                                                         | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | A list of team keys for the teams to request approval from for this stage                                | [<br/>"example-team"<br/>]                                                                               |
| `kind`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |