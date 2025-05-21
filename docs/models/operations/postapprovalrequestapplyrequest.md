# PostApprovalRequestApplyRequest

## Example Usage

```typescript
import { PostApprovalRequestApplyRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostApprovalRequestApplyRequest = {
  id: "<value>",
  postApprovalRequestApplyRequest: {
    comment: "Looks good, thanks for updating",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The approval request ID                                                                                  |
| `postApprovalRequestApplyRequest`                                                                        | [components.PostApprovalRequestApplyRequest](../../models/components/postapprovalrequestapplyrequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |