# DeleteTriggerWorkflowRequest

## Example Usage

```typescript
import { DeleteTriggerWorkflowRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteTriggerWorkflowRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  featureFlagKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `environmentKey`     | *string*             | :heavy_check_mark:   | The environment key  |
| `featureFlagKey`     | *string*             | :heavy_check_mark:   | The feature flag key |
| `id`                 | *string*             | :heavy_check_mark:   | The flag trigger ID  |