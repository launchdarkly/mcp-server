# AIConfigTargetingDefaults

## Example Usage

```typescript
import { AIConfigTargetingDefaults } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingDefaults = {
  onVariation: 6,
  offVariation: 1,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `onVariation`                                       | *number*                                            | :heavy_check_mark:                                  | Index of the variation served when targeting is on  |
| `offVariation`                                      | *number*                                            | :heavy_check_mark:                                  | Index of the variation served when targeting is off |