# InsightGroupCollectionScoreMetadata

## Example Usage

```typescript
import { InsightGroupCollectionScoreMetadata } from "@launchdarkly/mcp-server";

let value: InsightGroupCollectionScoreMetadata = {
  period: {
    startTime: 459209,
    endTime: 373908,
  },
  lastPeriod: {
    startTime: 634896,
    endTime: 310566,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `period`                                           | [models.InsightPeriod](../models/insightperiod.md) | :heavy_check_mark:                                 | N/A                                                |
| `lastPeriod`                                       | [models.InsightPeriod](../models/insightperiod.md) | :heavy_check_mark:                                 | N/A                                                |