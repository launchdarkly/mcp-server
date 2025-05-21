# DeleteWorkflowRequest

## Example Usage

```typescript
import { DeleteWorkflowRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteWorkflowRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  workflowId: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `featureFlagKey`     | *string*             | :heavy_check_mark:   | The feature flag key |
| `environmentKey`     | *string*             | :heavy_check_mark:   | The environment key  |
| `workflowId`         | *string*             | :heavy_check_mark:   | The workflow id      |