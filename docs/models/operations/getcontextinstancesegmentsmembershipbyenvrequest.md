# GetContextInstanceSegmentsMembershipByEnvRequest

## Example Usage

```typescript
import { GetContextInstanceSegmentsMembershipByEnvRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetContextInstanceSegmentsMembershipByEnvRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  requestBody: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `projectKey`          | *string*              | :heavy_check_mark:    | The project key       |
| `environmentKey`      | *string*              | :heavy_check_mark:    | The environment key   |
| `requestBody`         | Record<string, *any*> | :heavy_check_mark:    | N/A                   |