# VariationOrRolloutRep

## Example Usage

```typescript
import { VariationOrRolloutRep } from "@launchdarkly/mcp-server/models/components";

let value: VariationOrRolloutRep = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `variation`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | The index of the variation, from the array of variations for this flag |
| `rollout`                                                              | [components.Rollout](../../models/components/rollout.md)               | :heavy_minus_sign:                                                     | N/A                                                                    |