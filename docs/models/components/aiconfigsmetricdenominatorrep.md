# AiConfigsMetricDenominatorRep

## Example Usage

```typescript
import { AiConfigsMetricDenominatorRep } from "@launchdarkly/mcp-server/models/components";

let value: AiConfigsMetricDenominatorRep = {
  eventName: "eventName",
  isNumeric: true,
  unitAggregationType: "unitAggregationType",
  unitAggregationField: "unitAggregationField",
  valueColumn: "valueColumn",
  dataSource: {
    key: "key",
    environmentKey: "environmentKey",
    name: "_name",
    integrationKey: "_integrationKey",
  },
  filters: {
    type: "contextAttribute",
    attribute: "country",
    op: "op",
    values: [
      "JP",
    ],
    contextKind: "user",
    negate: false,
  },
  windowStartOffset: 4,
  windowEndOffset: 5,
  winsorLowerPercentile: 9.965781217890562,
  winsorUpperPercentile: 9.369310271410669,
  winsorIncludeImputed: true,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `eventName`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The warehouse event column for the denominator                                                                                 |                                                                                                                                |
| `isNumeric`                                                                                                                    | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Whether the denominator aggregates a numeric value                                                                             |                                                                                                                                |
| `unitAggregationType`                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | How individual unit values are aggregated for the denominator                                                                  |                                                                                                                                |
| `unitAggregationField`                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The column to count distinct values of; required when unitAggregationType is count_distinct                                    |                                                                                                                                |
| `valueColumn`                                                                                                                  | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | For a numeric denominator, the column holding the numeric value                                                                |                                                                                                                                |
| `dataSource`                                                                                                                   | [components.AiConfigsMetricDataSourceRefRep](../../models/components/aiconfigsmetricdatasourcerefrep.md)                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            | {<br/>"_name": "_name",<br/>"_integrationKey": "_integrationKey",<br/>"key": "key",<br/>"environmentKey": "environmentKey"<br/>} |
| `filters`                                                                                                                      | [components.AiConfigsFilter](../../models/components/aiconfigsfilter.md)                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            | {<br/>"op": "op",<br/>"negate": false,<br/>"values": [<br/>"JP"<br/>],<br/>"contextKind": "user",<br/>"attribute": "country",<br/>"type": "contextAttribute"<br/>} |
| `windowStartOffset`                                                                                                            | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Start of the measurement window in milliseconds                                                                                |                                                                                                                                |
| `windowEndOffset`                                                                                                              | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | End of the measurement window in milliseconds                                                                                  |                                                                                                                                |
| `winsorLowerPercentile`                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Lower winsorization percentile in the open interval (0, 100)                                                                   |                                                                                                                                |
| `winsorUpperPercentile`                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Upper winsorization percentile in the open interval (0, 100)                                                                   |                                                                                                                                |
| `winsorIncludeImputed`                                                                                                         | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | When true, the percentile bound calculation includes imputed zeros                                                             |                                                                                                                                |