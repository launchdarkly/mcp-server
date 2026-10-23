# AIConfigTargetingEnvironmentFallthroughRolloutVariation

## Example Usage

```typescript
import { AIConfigTargetingEnvironmentFallthroughRolloutVariation } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingEnvironmentFallthroughRolloutVariation = {
  untracked: true,
  variation: 9,
  weight: 3,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `untracked`                                                 | *boolean*                                                   | :heavy_minus_sign:                                          | Whether this variation is excluded from experiment tracking |
| `variation`                                                 | *number*                                                    | :heavy_check_mark:                                          | Index of the variation                                      |
| `weight`                                                    | *number*                                                    | :heavy_check_mark:                                          | The weight of this variation, in thousandths of a percent   |