# Series

## Example Usage

```typescript
import { Series } from "@launchdarkly/mcp-server/models/components";

let value: Series = {
  time: 1676332800000,
  value: 92,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `time`                            | *number*                          | :heavy_check_mark:                | The timestamp                     | 1676332800000                     |
| `value`                           | *number*                          | :heavy_check_mark:                | The value for the given timestamp | 92                                |