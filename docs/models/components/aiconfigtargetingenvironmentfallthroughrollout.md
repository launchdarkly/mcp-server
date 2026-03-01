# AIConfigTargetingEnvironmentFallthroughRollout

## Example Usage

```typescript
import { AIConfigTargetingEnvironmentFallthroughRollout } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingEnvironmentFallthroughRollout = {
  bucketBy: "bucketBy",
  contextKind: "contextKind",
  experimentAllocation: {
    canReshuffle: true,
    defaultVariation: 2,
    type: "type",
  },
  seed: 7,
  variations: [
    {
      untracked: true,
      variation: 9,
      weight: 3,
    },
    {
      untracked: true,
      variation: 9,
      weight: 3,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              | Example                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bucketBy`                                                                                                                                                                               | *string*                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                       | N/A                                                                                                                                                                                      |                                                                                                                                                                                          |
| `contextKind`                                                                                                                                                                            | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |                                                                                                                                                                                          |
| `experimentAllocation`                                                                                                                                                                   | [components.AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation](../../models/components/aiconfigtargetingenvironmentfallthroughrolloutexperimentationallocation.md) | :heavy_minus_sign:                                                                                                                                                                       | N/A                                                                                                                                                                                      | {<br/>"defaultVariation": 2,<br/>"canReshuffle": true,<br/>"type": "type"<br/>}                                                                                                          |
| `seed`                                                                                                                                                                                   | *number*                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                       | N/A                                                                                                                                                                                      |                                                                                                                                                                                          |
| `variations`                                                                                                                                                                             | [components.AIConfigTargetingEnvironmentFallthroughRolloutVariation](../../models/components/aiconfigtargetingenvironmentfallthroughrolloutvariation.md)[]                               | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |                                                                                                                                                                                          |