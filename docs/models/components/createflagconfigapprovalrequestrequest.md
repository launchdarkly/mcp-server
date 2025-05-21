# CreateFlagConfigApprovalRequestRequest

## Example Usage

```typescript
import { CreateFlagConfigApprovalRequestRequest } from "@launchdarkly/mcp-server/models/components";

let value: CreateFlagConfigApprovalRequestRequest = {
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
  operatingOnId: "6297ed79dee7dc14e1f9a80c",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                    | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Optional comment describing the approval request                                                                             | optional comment                                                                                                             |
| `description`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | A brief description of the changes you're requesting                                                                         | Requesting to update targeting                                                                                               |
| `instructions`                                                                                                               | Record<string, *any*>[]                                                                                                      | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `notifyMemberIds`                                                                                                            | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | An array of member IDs. These members are notified to review the approval request.                                           | [<br/>"1234a56b7c89d012345e678f"<br/>]                                                                                       |
| `notifyTeamKeys`                                                                                                             | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | An array of team keys. The members of these teams are notified to review the approval request.                               | [<br/>"example-reviewer-team"<br/>]                                                                                          |
| `executionDate`                                                                                                              | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `operatingOnId`                                                                                                              | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The ID of a scheduled change. Include this if your <code>instructions</code> include editing or deleting a scheduled change. | 6297ed79dee7dc14e1f9a80c                                                                                                     |
| `integrationConfig`                                                                                                          | Record<string, *any*>                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |