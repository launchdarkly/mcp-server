# DeleteContextInstancesRequest

## Example Usage

```typescript
import { DeleteContextInstancesRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteContextInstancesRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `projectKey`            | *string*                | :heavy_check_mark:      | The project key         |
| `environmentKey`        | *string*                | :heavy_check_mark:      | The environment key     |
| `id`                    | *string*                | :heavy_check_mark:      | The context instance ID |