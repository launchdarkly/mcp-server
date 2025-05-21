# SeriesIntervalsRep

## Example Usage

```typescript
import { SeriesIntervalsRep } from "@launchdarkly/mcp-server";

let value: SeriesIntervalsRep = {
  series: [
    {
      time: 1676332800000,
      value: 92,
    },
  ],
  links: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `series`                                            | [models.Series](../models/series.md)[]              | :heavy_check_mark:                                  | An array of timestamps and values for a given meter |
| `links`                                             | Record<string, *any*>                               | :heavy_check_mark:                                  | The location and content type of related resources  |