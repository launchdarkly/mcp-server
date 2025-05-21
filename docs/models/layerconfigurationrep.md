# LayerConfigurationRep

## Example Usage

```typescript
import { LayerConfigurationRep } from "@launchdarkly/mcp-server";

let value: LayerConfigurationRep = {
  reservations: [
    {
      experimentKey: "checkout-flow-experiment",
      flagKey: "checkout-flow-flag",
      reservationPercent: 20,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `reservations`                                                   | [models.LayerReservationRep](../models/layerreservationrep.md)[] | :heavy_check_mark:                                               | The experiment reservations for the layer                        |