# PostApprovalRequestApplyForFlagRequest

## Example Usage

```typescript
import { PostApprovalRequestApplyForFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostApprovalRequestApplyForFlagRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  id: "<value>",
  postApprovalRequestApplyRequest: {
    comment: "Looks good, thanks for updating",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The project key                                                                                          |
| `featureFlagKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The feature flag key                                                                                     |
| `environmentKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The environment key                                                                                      |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The feature flag approval request ID                                                                     |
| `postApprovalRequestApplyRequest`                                                                        | [components.PostApprovalRequestApplyRequest](../../models/components/postapprovalrequestapplyrequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |