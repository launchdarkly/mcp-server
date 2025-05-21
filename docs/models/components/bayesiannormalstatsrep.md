# BayesianNormalStatsRep

## Example Usage

```typescript
import { BayesianNormalStatsRep } from "@launchdarkly/mcp-server/models/components";

let value: BayesianNormalStatsRep = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `dataWeight`                          | *number*                              | :heavy_minus_sign:                    | The precision weight of the data mean |
| `priorMean`                           | *number*                              | :heavy_minus_sign:                    | Mean of the prior distribution        |