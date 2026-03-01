# AIConfigTargetingEnvironmentFallthrough

## Example Usage

```typescript
import { AIConfigTargetingEnvironmentFallthrough } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingEnvironmentFallthrough = {
  variation: 5,
  rollout: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variation`                                                                                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                          |
| `rollout`                                                                                                                                                                                                                                                                                | [components.AIConfigTargetingEnvironmentFallthroughRollout](../../models/components/aiconfigtargetingenvironmentfallthroughrollout.md)                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                      | {<br/>"experimentAllocation": {<br/>"defaultVariation": 2,<br/>"canReshuffle": true,<br/>"type": "type"<br/>},<br/>"seed": 7,<br/>"variations": [<br/>{<br/>"weight": 3,<br/>"_untracked": true,<br/>"variation": 9<br/>},<br/>{<br/>"weight": 3,<br/>"_untracked": true,<br/>"variation": 9<br/>}<br/>],<br/>"contextKind": "contextKind",<br/>"bucketBy": "bucketBy"<br/>} |