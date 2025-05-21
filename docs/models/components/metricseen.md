# MetricSeen

## Example Usage

```typescript
import { MetricSeen } from "@launchdarkly/mcp-server/models/components";

let value: MetricSeen = {
  ever: true,
  timestamp: 1657129307,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `ever`                                                                          | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether the metric has received an event for this iteration                     | true                                                                            |
| `timestamp`                                                                     | *number*                                                                        | :heavy_minus_sign:                                                              | Timestamp of when the metric most recently received an event for this iteration | 1657129307                                                                      |