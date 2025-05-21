# LeadTimeStagesRep

## Example Usage

```typescript
import { LeadTimeStagesRep } from "@launchdarkly/mcp-server/models/components";

let value: LeadTimeStagesRep = {
  codingDurationMs: 1000000,
  reviewDurationMs: 500000,
  waitDurationMs: 100000,
  deployDurationMs: 100000,
  totalLeadTimeMs: 1600000,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `codingDurationMs`                                                         | *number*                                                                   | :heavy_check_mark:                                                         | The coding duration in milliseconds                                        | 1000000                                                                    |
| `reviewDurationMs`                                                         | *number*                                                                   | :heavy_minus_sign:                                                         | The review duration in milliseconds                                        | 500000                                                                     |
| `waitDurationMs`                                                           | *number*                                                                   | :heavy_minus_sign:                                                         | The wait duration between merge time and deploy start time in milliseconds | 100000                                                                     |
| `deployDurationMs`                                                         | *number*                                                                   | :heavy_minus_sign:                                                         | The deploy duration in milliseconds                                        | 100000                                                                     |
| `totalLeadTimeMs`                                                          | *number*                                                                   | :heavy_minus_sign:                                                         | The total lead time in milliseconds                                        | 1600000                                                                    |