# AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation

## Example Usage

```typescript
import { AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation } from "@launchdarkly/mcp-server/models/components";

let value:
  AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation = {
    canReshuffle: true,
    defaultVariation: 2,
    type: "type",
  };
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `canReshuffle`                                    | *boolean*                                         | :heavy_check_mark:                                | Whether contexts can be reassigned to new buckets |
| `defaultVariation`                                | *number*                                          | :heavy_check_mark:                                | Index of the default variation                    |
| `type`                                            | *string*                                          | :heavy_check_mark:                                | The allocation type                               |