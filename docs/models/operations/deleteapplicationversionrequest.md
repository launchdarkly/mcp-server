# DeleteApplicationVersionRequest

## Example Usage

```typescript
import { DeleteApplicationVersionRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteApplicationVersionRequest = {
  applicationKey: "<value>",
  versionKey: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `applicationKey`            | *string*                    | :heavy_check_mark:          | The application key         |
| `versionKey`                | *string*                    | :heavy_check_mark:          | The application version key |