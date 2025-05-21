# GetFlagConfigScheduledChangesRequest

## Example Usage

```typescript
import { GetFlagConfigScheduledChangesRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetFlagConfigScheduledChangesRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `featureFlagKey`     | *string*             | :heavy_check_mark:   | The feature flag key |
| `environmentKey`     | *string*             | :heavy_check_mark:   | The environment key  |