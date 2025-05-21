# GetFlagLinksRequest

## Example Usage

```typescript
import { GetFlagLinksRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetFlagLinksRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `featureFlagKey`     | *string*             | :heavy_check_mark:   | The feature flag key |