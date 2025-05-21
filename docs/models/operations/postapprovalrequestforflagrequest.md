# PostApprovalRequestForFlagRequest

## Example Usage

```typescript
import { PostApprovalRequestForFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostApprovalRequestForFlagRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  createFlagConfigApprovalRequestRequest: {
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
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The project key                                                                                                        |
| `featureFlagKey`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The feature flag key                                                                                                   |
| `environmentKey`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The environment key                                                                                                    |
| `createFlagConfigApprovalRequestRequest`                                                                               | [components.CreateFlagConfigApprovalRequestRequest](../../models/components/createflagconfigapprovalrequestrequest.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |