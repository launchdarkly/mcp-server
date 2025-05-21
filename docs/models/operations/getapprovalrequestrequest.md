# GetApprovalRequestRequest

## Example Usage

```typescript
import { GetApprovalRequestRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetApprovalRequestRequest = {
  id: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | The approval request ID                                                                           |
| `expand`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | A comma-separated list of fields to expand in the response. Supported fields are explained above. |