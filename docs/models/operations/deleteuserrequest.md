# DeleteUserRequest

## Example Usage

```typescript
import { DeleteUserRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteUserRequest = {
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