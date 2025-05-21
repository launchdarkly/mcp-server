# GetDestinationRequest

## Example Usage

```typescript
import { GetDestinationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetDestinationRequest = {
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