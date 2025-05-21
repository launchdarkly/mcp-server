# GetDependentFlagsRequest

## Example Usage

```typescript
import { GetDependentFlagsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetDependentFlagsRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `featureFlagKey`     | *string*             | :heavy_check_mark:   | The feature flag key |