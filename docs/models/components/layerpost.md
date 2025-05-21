# LayerPost

## Example Usage

```typescript
import { LayerPost } from "@launchdarkly/mcp-server/models/components";

let value: LayerPost = {
  key: "checkout-flow",
  name: "Checkout Flow",
  description: "given hence across account cautiously option marksman sick",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `key`                                 | *string*                              | :heavy_check_mark:                    | Unique identifier for the layer       | checkout-flow                         |
| `name`                                | *string*                              | :heavy_check_mark:                    | Layer name                            | Checkout Flow                         |
| `description`                         | *string*                              | :heavy_check_mark:                    | The checkout flow for the application |                                       |