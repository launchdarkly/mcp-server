# BayesianBetaBinomialStatsRep

## Example Usage

```typescript
import { BayesianBetaBinomialStatsRep } from "@launchdarkly/mcp-server";

let value: BayesianBetaBinomialStatsRep = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `priorAlpha`                                             | *number*                                                 | :heavy_minus_sign:                                       | Sum of converted pseudo-units for prior distribution     |
| `priorBeta`                                              | *number*                                                 | :heavy_minus_sign:                                       | Sum of non-converted pseudo-units for prior distribution |
| `priorMean`                                              | *number*                                                 | :heavy_minus_sign:                                       | Mean of the prior distribution                           |
| `dataWeight`                                             | *number*                                                 | :heavy_minus_sign:                                       | The precision weight of the data mean                    |