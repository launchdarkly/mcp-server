# SlicedResultsRep

## Example Usage

```typescript
import { SlicedResultsRep } from "@launchdarkly/mcp-server/models/components";

let value: SlicedResultsRep = {
  attribute: "country",
  attributeValue: "Canada",
  treatmentResults: [
    {
      treatmentId: "92b8354e-360e-4d67-8f13-fa6a46ca8077",
      treatmentName: "variation 25% off",
      mean: 0.5432525951557093,
      dataMean: 2.464845,
      dataStdDev: 1e-7,
      credibleInterval: {
        upper: 0.6713222134386467,
        lower: 0.4060771673663068,
      },
      pBest: 0.6083,
      relativeDifferences: [
        {
          upper: 0.42655970355712425,
          lower: -0.13708601934659803,
          fromTreatmentId: "92b8354e-360e-4d67-8f13-fa6a46ca8077",
        },
      ],
      units: 76,
      traffic: 332,
      eventValuesSum: 6234,
      distribution: {
        kind: "normal",
      },
      varianceReduction: 0.1,
      model: "bayesianNormal",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `attribute`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | An attribute that results are sliced by                                          | country                                                                          |
| `attributeValue`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | Attribute Value for 'attribute'                                                  | Canada                                                                           |
| `treatmentResults`                                                               | [components.TreatmentResultRep](../../models/components/treatmentresultrep.md)[] | :heavy_minus_sign:                                                               | A list of the results for each treatment                                         |                                                                                  |