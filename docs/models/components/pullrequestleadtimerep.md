# PullRequestLeadTimeRep

## Example Usage

```typescript
import { PullRequestLeadTimeRep } from "@launchdarkly/mcp-server/models/components";

let value: PullRequestLeadTimeRep = {
  codingDurationMs: 1000000,
  reviewDurationMs: 500000,
  maxWaitDurationMs: 100000,
  avgWaitDurationMs: 100000,
  maxDeployDurationMs: 100000,
  avgDeployDurationMs: 100000,
  maxTotalLeadTimeMs: 1600000,
  avgTotalLeadTimeMs: 1600000,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `codingDurationMs`                                                                 | *number*                                                                           | :heavy_check_mark:                                                                 | The coding duration in milliseconds                                                | 1000000                                                                            |
| `reviewDurationMs`                                                                 | *number*                                                                           | :heavy_minus_sign:                                                                 | The review duration in milliseconds                                                | 500000                                                                             |
| `maxWaitDurationMs`                                                                | *number*                                                                           | :heavy_minus_sign:                                                                 | The max wait duration between merge time and deploy start time in milliseconds     | 100000                                                                             |
| `avgWaitDurationMs`                                                                | *number*                                                                           | :heavy_minus_sign:                                                                 | The average wait duration between merge time and deploy start time in milliseconds | 100000                                                                             |
| `maxDeployDurationMs`                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | The max deploy duration in milliseconds                                            | 100000                                                                             |
| `avgDeployDurationMs`                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | The average deploy duration in milliseconds                                        | 100000                                                                             |
| `maxTotalLeadTimeMs`                                                               | *number*                                                                           | :heavy_minus_sign:                                                                 | The max total lead time in milliseconds                                            | 1600000                                                                            |
| `avgTotalLeadTimeMs`                                                               | *number*                                                                           | :heavy_minus_sign:                                                                 | The average total lead time in milliseconds                                        | 1600000                                                                            |