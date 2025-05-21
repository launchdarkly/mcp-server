# VariationEvalSummary

## Example Usage

```typescript
import { VariationEvalSummary } from "@launchdarkly/mcp-server/models/components";

let value: VariationEvalSummary = {
  value: "true",
  before: 1000,
  after: 500,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `value`                                                            | *any*                                                              | :heavy_minus_sign:                                                 | The variation value                                                | true                                                               |
| `before`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | The number of evaluations in the ten minutes before the flag event | 1000                                                               |
| `after`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The number of evaluations in the ten minutes after the flag event  | 500                                                                |