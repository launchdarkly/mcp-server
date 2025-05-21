# GetSubscriptionByIDRequest

## Example Usage

```typescript
import { GetSubscriptionByIDRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetSubscriptionByIDRequest = {
  integrationKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `integrationKey`    | *string*            | :heavy_check_mark:  | The integration key |
| `id`                | *string*            | :heavy_check_mark:  | The subscription ID |