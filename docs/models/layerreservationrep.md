# LayerReservationRep

## Example Usage

```typescript
import { LayerReservationRep } from "@launchdarkly/mcp-server";

let value: LayerReservationRep = {
  experimentKey: "checkout-flow-experiment",
  flagKey: "checkout-flow-flag",
  reservationPercent: 20,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `experimentKey`                                       | *string*                                              | :heavy_check_mark:                                    | The key of the experiment                             | checkout-flow-experiment                              |
| `flagKey`                                             | *string*                                              | :heavy_check_mark:                                    | The key of the flag                                   | checkout-flow-flag                                    |
| `reservationPercent`                                  | *number*                                              | :heavy_check_mark:                                    | The percentage of traffic reserved for the experiment | 20                                                    |