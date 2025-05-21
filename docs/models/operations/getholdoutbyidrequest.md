# GetHoldoutByIdRequest

## Example Usage

```typescript
import { GetHoldoutByIdRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetHoldoutByIdRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  holdoutId: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `projectKey`              | *string*                  | :heavy_check_mark:        | The project key           |
| `environmentKey`          | *string*                  | :heavy_check_mark:        | The environment key       |
| `holdoutId`               | *string*                  | :heavy_check_mark:        | The holdout experiment ID |