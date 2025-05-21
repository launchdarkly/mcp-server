# CreateApprovalRequestRequest

## Example Usage

```typescript
import { CreateApprovalRequestRequest } from "@launchdarkly/mcp-server/models/components";

let value: CreateApprovalRequestRequest = {
  resourceId: "proj/projKey:env/envKey:flag/flagKey",
  comment: "optional comment",
  description: "Requesting to update targeting",
  instructions: [
    {
      "key": "<value>",
    },
  ],
  notifyMemberIds: [
    "1234a56b7c89d012345e678f",
  ],
  notifyTeamKeys: [
    "example-reviewer-team",
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | String representation of the resource specifier                                                | proj/projKey:env/envKey:flag/flagKey                                                           |
| `comment`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Optional comment describing the approval request                                               | optional comment                                                                               |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | A brief description of the changes you're requesting                                           | Requesting to update targeting                                                                 |
| `instructions`                                                                                 | Record<string, *any*>[]                                                                        | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `notifyMemberIds`                                                                              | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | An array of member IDs. These members are notified to review the approval request.             | [<br/>"1234a56b7c89d012345e678f"<br/>]                                                         |
| `notifyTeamKeys`                                                                               | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | An array of team keys. The members of these teams are notified to review the approval request. | [<br/>"example-reviewer-team"<br/>]                                                            |
| `integrationConfig`                                                                            | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |