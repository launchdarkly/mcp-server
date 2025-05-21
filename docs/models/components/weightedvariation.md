# WeightedVariation

## Example Usage

```typescript
import { WeightedVariation } from "@launchdarkly/mcp-server/models/components";

let value: WeightedVariation = {
  variation: 810684,
  weight: 298600,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `variation`        | *number*           | :heavy_check_mark: | N/A                |
| `weight`           | *number*           | :heavy_check_mark: | N/A                |
| `untracked`        | *boolean*          | :heavy_minus_sign: | N/A                |