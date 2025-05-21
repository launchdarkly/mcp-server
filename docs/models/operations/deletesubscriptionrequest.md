# DeleteSubscriptionRequest

## Example Usage

```typescript
import { DeleteSubscriptionRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteSubscriptionRequest = {
  integrationKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `integrationKey`    | *string*            | :heavy_check_mark:  | The integration key |
| `id`                | *string*            | :heavy_check_mark:  | The subscription ID |