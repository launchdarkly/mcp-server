# PostApprovalRequestReviewForFlagRequest

## Example Usage

```typescript
import { PostApprovalRequestReviewForFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostApprovalRequestReviewForFlagRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  id: "<value>",
  postApprovalRequestReviewRequest: {
    kind: "approve",
    comment: "Looks good, thanks for updating",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | The project key                                                                             |
| `featureFlagKey`                                                                            | *string*                                                                                    | :heavy_check_mark:                                                                          | The feature flag key                                                                        |
| `environmentKey`                                                                            | *string*                                                                                    | :heavy_check_mark:                                                                          | The environment key                                                                         |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | The feature flag approval request ID                                                        |
| `postApprovalRequestReviewRequest`                                                          | [models.PostApprovalRequestReviewRequest](../../models/postapprovalrequestreviewrequest.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |