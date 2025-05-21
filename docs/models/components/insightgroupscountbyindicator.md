# InsightGroupsCountByIndicator

## Example Usage

```typescript
import { InsightGroupsCountByIndicator } from "@launchdarkly/mcp-server/models/components";

let value: InsightGroupsCountByIndicator = {
  excellent: 1,
  good: 1,
  fair: 1,
  needsAttention: 1,
  notCalculated: 1,
  unknown: 1,
  total: 6,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `excellent`                                                   | *number*                                                      | :heavy_check_mark:                                            | The number of insight groups with an excellent indicator      | 1                                                             |
| `good`                                                        | *number*                                                      | :heavy_check_mark:                                            | The number of insight groups with a good indicator            | 1                                                             |
| `fair`                                                        | *number*                                                      | :heavy_check_mark:                                            | The number of insight groups with a fair indicator            | 1                                                             |
| `needsAttention`                                              | *number*                                                      | :heavy_check_mark:                                            | The number of insight groups with a needs attention indicator | 1                                                             |
| `notCalculated`                                               | *number*                                                      | :heavy_check_mark:                                            | The number of insight groups with a not calculated indicator  | 1                                                             |
| `unknown`                                                     | *number*                                                      | :heavy_check_mark:                                            | The number of insight groups with an unknown indicator        | 1                                                             |
| `total`                                                       | *number*                                                      | :heavy_check_mark:                                            | The total number of insight groups                            | 6                                                             |