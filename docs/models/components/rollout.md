# Rollout

## Example Usage

```typescript
import { Rollout } from "@launchdarkly/mcp-server/models/components";

let value: Rollout = {
  variations: [
    {
      variation: 786693,
      weight: 96641,
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `variations`                                                                             | [components.WeightedVariation](../../models/components/weightedvariation.md)[]           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `experimentAllocation`                                                                   | [components.ExperimentAllocationRep](../../models/components/experimentallocationrep.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `seed`                                                                                   | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `bucketBy`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `contextKind`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |