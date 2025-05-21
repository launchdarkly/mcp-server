# DeleteFlagLinkRequest

## Example Usage

```typescript
import { DeleteFlagLinkRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteFlagLinkRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `projectKey`            | *string*                | :heavy_check_mark:      | The project key         |
| `featureFlagKey`        | *string*                | :heavy_check_mark:      | The feature flag key    |
| `id`                    | *string*                | :heavy_check_mark:      | The flag link ID or Key |