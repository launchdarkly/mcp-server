# PatchFlagConfigApprovalRequestRequest

## Example Usage

```typescript
import { PatchFlagConfigApprovalRequestRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchFlagConfigApprovalRequestRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `featureFlagKey`     | *string*             | :heavy_check_mark:   | The feature flag key |
| `environmentKey`     | *string*             | :heavy_check_mark:   | The environment key  |
| `id`                 | *string*             | :heavy_check_mark:   | The approval ID      |