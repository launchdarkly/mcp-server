# PostApprovalRequestReviewRequest

## Example Usage

```typescript
import { PostApprovalRequestReviewRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostApprovalRequestReviewRequest = {
  id: "<value>",
  postApprovalRequestReviewRequest: {
    kind: "approve",
    comment: "Looks good, thanks for updating",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The approval request ID                                                                                    |
| `postApprovalRequestReviewRequest`                                                                         | [components.PostApprovalRequestReviewRequest](../../models/components/postapprovalrequestreviewrequest.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |