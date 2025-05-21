# GetFeatureFlagStatusRequest

## Example Usage

```typescript
import { GetFeatureFlagStatusRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetFeatureFlagStatusRequest = {
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