# PostApprovalRequestReviewRequest

## Example Usage

```typescript
import { PostApprovalRequestReviewRequest } from "@launchdarkly/mcp-server";

let value: PostApprovalRequestReviewRequest = {
  kind: "approve",
  comment: "Looks good, thanks for updating",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `kind`                                                                                           | [models.PostApprovalRequestReviewRequestKind](../models/postapprovalrequestreviewrequestkind.md) | :heavy_minus_sign:                                                                               | The type of review for this approval request                                                     | approve                                                                                          |
| `comment`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional comment about the approval request                                                      | Looks good, thanks for updating                                                                  |