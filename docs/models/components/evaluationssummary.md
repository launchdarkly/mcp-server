# EvaluationsSummary

## Example Usage

```typescript
import { EvaluationsSummary } from "@launchdarkly/mcp-server/models/components";

let value: EvaluationsSummary = {
  variations: [
    {
      value: "true",
      before: 1000,
      after: 500,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `variations`                                                                         | [components.VariationEvalSummary](../../models/components/variationevalsummary.md)[] | :heavy_minus_sign:                                                                   | A list of variation evaluations                                                      |