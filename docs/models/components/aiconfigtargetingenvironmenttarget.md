# AIConfigTargetingEnvironmentTarget

## Example Usage

```typescript
import { AIConfigTargetingEnvironmentTarget } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingEnvironmentTarget = {
  contextKind: "contextKind",
  values: [
    "values",
    "values",
  ],
  variation: 5,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `contextKind`                   | *string*                        | :heavy_check_mark:              | The context kind                |
| `values`                        | *string*[]                      | :heavy_check_mark:              | The context keys to target      |
| `variation`                     | *number*                        | :heavy_check_mark:              | Index of the variation to serve |