# DeleteDestinationRequest

## Example Usage

```typescript
import { DeleteDestinationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteDestinationRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectKey`                   | *string*                       | :heavy_check_mark:             | The project key                |
| `environmentKey`               | *string*                       | :heavy_check_mark:             | The environment key            |
| `id`                           | *string*                       | :heavy_check_mark:             | The Data Export destination ID |