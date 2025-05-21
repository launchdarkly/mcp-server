# DeleteFlagConfigScheduledChangesRequest

## Example Usage

```typescript
import { DeleteFlagConfigScheduledChangesRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteFlagConfigScheduledChangesRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `projectKey`            | *string*                | :heavy_check_mark:      | The project key         |
| `featureFlagKey`        | *string*                | :heavy_check_mark:      | The feature flag key    |
| `environmentKey`        | *string*                | :heavy_check_mark:      | The environment key     |
| `id`                    | *string*                | :heavy_check_mark:      | The scheduled change id |