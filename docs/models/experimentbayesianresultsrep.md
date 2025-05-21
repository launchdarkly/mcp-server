# ExperimentBayesianResultsRep

## Example Usage

```typescript
import { ExperimentBayesianResultsRep } from "@launchdarkly/mcp-server";

let value: ExperimentBayesianResultsRep = {
  metricSeen: {
    ever: true,
    timestamp: 1657129307,
  },
  probabilityOfMismatch: 0.9999999999999738,
  results: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                                                                                                     | Record<string, [models.Link](../models/link.md)>                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                          | The location and content type of related resources                                                                                                                                                                                                          |                                                                                                                                                                                                                                                             |
| ~~`treatmentResults`~~                                                                                                                                                                                                                                      | [models.TreatmentResultRep](../models/treatmentresultrep.md)[]                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated, use <code>results</code> instead. Only populated when response does not contain results sliced by multiple attributes. |                                                                                                                                                                                                                                                             |
| `metricSeen`                                                                                                                                                                                                                                                | [models.MetricSeen](../models/metricseen.md)                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                             |
| `probabilityOfMismatch`                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                          | The probability of a Sample Ratio Mismatch                                                                                                                                                                                                                  | 0.9999999999999738                                                                                                                                                                                                                                          |
| `results`                                                                                                                                                                                                                                                   | [models.SlicedResultsRep](../models/slicedresultsrep.md)[]                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                          | A list of attribute values and their corresponding treatment results                                                                                                                                                                                        |                                                                                                                                                                                                                                                             |