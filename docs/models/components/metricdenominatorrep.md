# MetricDenominatorRep

## Example Usage

```typescript
import { MetricDenominatorRep } from "@launchdarkly/mcp-server/models/components";

let value: MetricDenominatorRep = {
  filters: {
    type: "contextAttribute",
    attribute: "country",
    op: "<value>",
    values: [
      "JP",
    ],
    contextKind: "user",
    negate: false,
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `eventName`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | The warehouse event column for the denominator                                              |
| `isNumeric`                                                                                 | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Whether the denominator aggregates a numeric value                                          |
| `unitAggregationType`                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | How individual unit values are aggregated for the denominator                               |
| `unitAggregationField`                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | The column to count distinct values of; required when unitAggregationType is count_distinct |
| `valueColumn`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | For a numeric denominator, the column holding the numeric value                             |
| `dataSource`                                                                                | [components.MetricDataSourceRefRep](../../models/components/metricdatasourcerefrep.md)      | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `filters`                                                                                   | [components.Filter](../../models/components/filter.md)                                      | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `windowStartOffset`                                                                         | *number*                                                                                    | :heavy_minus_sign:                                                                          | Start of the measurement window in milliseconds                                             |
| `windowEndOffset`                                                                           | *number*                                                                                    | :heavy_minus_sign:                                                                          | End of the measurement window in milliseconds                                               |
| `winsorLowerPercentile`                                                                     | *number*                                                                                    | :heavy_minus_sign:                                                                          | Lower winsorization percentile in the open interval (0, 100)                                |
| `winsorUpperPercentile`                                                                     | *number*                                                                                    | :heavy_minus_sign:                                                                          | Upper winsorization percentile in the open interval (0, 100)                                |
| `winsorIncludeImputed`                                                                      | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | When true, the percentile bound calculation includes imputed zeros                          |