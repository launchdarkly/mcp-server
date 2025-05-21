# GetUserFlagSettingsRequest

## Example Usage

```typescript
import { GetUserFlagSettingsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetUserFlagSettingsRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  userKey: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `environmentKey`    | *string*            | :heavy_check_mark:  | The environment key |
| `userKey`           | *string*            | :heavy_check_mark:  | The user key        |