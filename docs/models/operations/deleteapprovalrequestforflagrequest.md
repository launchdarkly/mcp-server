# DeleteApprovalRequestForFlagRequest

## Example Usage

```typescript
import { DeleteApprovalRequestForFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteApprovalRequestForFlagRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `projectKey`                         | *string*                             | :heavy_check_mark:                   | The project key                      |
| `featureFlagKey`                     | *string*                             | :heavy_check_mark:                   | The feature flag key                 |
| `environmentKey`                     | *string*                             | :heavy_check_mark:                   | The environment key                  |
| `id`                                 | *string*                             | :heavy_check_mark:                   | The feature flag approval request ID |