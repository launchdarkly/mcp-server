# InsightGroupCollectionMetadata

## Example Usage

```typescript
import { InsightGroupCollectionMetadata } from "@launchdarkly/mcp-server/models/components";

let value: InsightGroupCollectionMetadata = {
  countByIndicator: {
    excellent: 1,
    good: 1,
    fair: 1,
    needsAttention: 1,
    notCalculated: 1,
    unknown: 1,
    total: 6,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `countByIndicator`                                                                                   | [components.InsightGroupsCountByIndicator](../../models/components/insightgroupscountbyindicator.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |