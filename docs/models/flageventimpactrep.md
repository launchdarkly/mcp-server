# FlagEventImpactRep

## Example Usage

```typescript
import { FlagEventImpactRep } from "@launchdarkly/mcp-server";

let value: FlagEventImpactRep = {
  size: "medium",
  percentage: 50,
  evaluationsSummary: {
    variations: [
      {
        value: "true",
        before: 1000,
        after: 500,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `size`                                                                                                           | [models.Size](../models/size.md)                                                                                 | :heavy_minus_sign:                                                                                               | The size of the flag event impact. Sizes are defined as: none (0%), small (0-20%), medium (20-80%), large (>80%) | medium                                                                                                           |
| `percentage`                                                                                                     | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The percentage of the flag event impact                                                                          | 50                                                                                                               |
| `reason`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `evaluationsSummary`                                                                                             | [models.EvaluationsSummary](../models/evaluationssummary.md)                                                     | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |