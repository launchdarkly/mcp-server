# GetUserFlagSettingRequest

## Example Usage

```typescript
import { GetUserFlagSettingRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetUserFlagSettingRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  userKey: "<value>",
  featureFlagKey: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `environmentKey`     | *string*             | :heavy_check_mark:   | The environment key  |
| `userKey`            | *string*             | :heavy_check_mark:   | The user key         |
| `featureFlagKey`     | *string*             | :heavy_check_mark:   | The feature flag key |