# PostFlagCopyConfigApprovalRequestRequest

## Example Usage

```typescript
import { PostFlagCopyConfigApprovalRequestRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostFlagCopyConfigApprovalRequestRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  createCopyFlagConfigApprovalRequestRequest: {
    comment: "optional comment",
    description: "copy flag settings to another environment",
    notifyMemberIds: [
      "1234a56b7c89d012345e678f",
    ],
    notifyTeamKeys: [
      "example-reviewer-team",
    ],
    source: {
      key: "environment-key-123abc",
      version: 1,
    },
    includedActions: [
      "updateOn",
    ],
    excludedActions: [
      "updateOn",
    ],
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `projectKey`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The project key                                                                                                                |
| `featureFlagKey`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The feature flag key                                                                                                           |
| `environmentKey`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The environment key for the target environment                                                                                 |
| `createCopyFlagConfigApprovalRequestRequest`                                                                                   | [components.CreateCopyFlagConfigApprovalRequestRequest](../../models/components/createcopyflagconfigapprovalrequestrequest.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |