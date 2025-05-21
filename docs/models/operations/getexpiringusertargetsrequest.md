# GetExpiringUserTargetsRequest

## Example Usage

```typescript
import { GetExpiringUserTargetsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetExpiringUserTargetsRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  featureFlagKey: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `environmentKey`     | *string*             | :heavy_check_mark:   | The environment key  |
| `featureFlagKey`     | *string*             | :heavy_check_mark:   | The feature flag key |