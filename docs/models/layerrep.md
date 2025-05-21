# LayerRep

## Example Usage

```typescript
import { LayerRep } from "@launchdarkly/mcp-server";

let value: LayerRep = {
  key: "checkout-flow",
  name: "Checkout Flow",
  description: "The checkout flow for the application",
  createdAt: 788501,
  randomizationUnit: "user",
  environments: {
    "key": {
      reservations: [
        {
          experimentKey: "checkout-flow-experiment",
          flagKey: "checkout-flow-flag",
          reservationPercent: 20,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `key`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | The key of the layer                                                               | checkout-flow                                                                      |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the layer                                                              | Checkout Flow                                                                      |
| `description`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | The description of the layer                                                       | The checkout flow for the application                                              |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `randomizationUnit`                                                                | *string*                                                                           | :heavy_minus_sign:                                                                 | The unit of randomization for the layer                                            | user                                                                               |
| `environments`                                                                     | Record<string, [models.LayerConfigurationRep](../models/layerconfigurationrep.md)> | :heavy_minus_sign:                                                                 | The layer configurations for each requested environment                            |                                                                                    |