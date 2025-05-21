# VariationSummary

## Example Usage

```typescript
import { VariationSummary } from "@launchdarkly/mcp-server";

let value: VariationSummary = {
  rules: 923035,
  nullRules: 33785,
  targets: 908714,
  contextTargets: 790310,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `rules`            | *number*           | :heavy_check_mark: | N/A                |
| `nullRules`        | *number*           | :heavy_check_mark: | N/A                |
| `targets`          | *number*           | :heavy_check_mark: | N/A                |
| `contextTargets`   | *number*           | :heavy_check_mark: | N/A                |
| `isFallthrough`    | *boolean*          | :heavy_minus_sign: | N/A                |
| `isOff`            | *boolean*          | :heavy_minus_sign: | N/A                |
| `rollout`          | *number*           | :heavy_minus_sign: | N/A                |
| `bucketBy`         | *string*           | :heavy_minus_sign: | N/A                |