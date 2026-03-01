# FlagSummary

## Example Usage

```typescript
import { FlagSummary } from "@launchdarkly/mcp-server/models/components";

let value: FlagSummary = {
  variations: {
    "key": {
      rules: 389323,
      nullRules: 584680,
      targets: 912315,
      contextTargets: 420202,
    },
  },
  prerequisites: 668834,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `variations`                                                                               | Record<string, [components.VariationSummary](../../models/components/variationsummary.md)> | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `prerequisites`                                                                            | *number*                                                                                   | :heavy_check_mark:                                                                         | The number of prerequisites for this flag                                                  |