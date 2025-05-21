# GetExpiringFlagsForUserRequest

## Example Usage

```typescript
import { GetExpiringFlagsForUserRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetExpiringFlagsForUserRequest = {
  projectKey: "<value>",
  userKey: "<value>",
  environmentKey: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `userKey`           | *string*            | :heavy_check_mark:  | The user key        |
| `environmentKey`    | *string*            | :heavy_check_mark:  | The environment key |