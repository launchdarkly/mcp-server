# LayerSnapshotRep

## Example Usage

```typescript
import { LayerSnapshotRep } from "@launchdarkly/mcp-server/models/components";

let value: LayerSnapshotRep = {
  key: "checkout-flow",
  name: "Checkout Flow",
  reservationPercent: 10,
  otherReservationPercent: 70,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                                | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Key of the layer the experiment was part of                                                                                          | checkout-flow                                                                                                                        |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Layer name at the time this experiment iteration was stopped                                                                         | Checkout Flow                                                                                                                        |
| `reservationPercent`                                                                                                                 | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Percent of layer traffic that was reserved in the layer for this experiment iteration                                                | 10                                                                                                                                   |
| `otherReservationPercent`                                                                                                            | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Percent of layer traffic that was reserved for other experiments in the same environment, when this experiment iteration was stopped | 70                                                                                                                                   |