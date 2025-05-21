# MetricGroupResultsRep

## Example Usage

```typescript
import { MetricGroupResultsRep } from "@launchdarkly/mcp-server";

let value: MetricGroupResultsRep = {
  links: {
    "key": {},
  },
  metrics: [
    {
      metric: {
        key: "metric-key-123abc",
        versionId: "version-id-123abc",
        name: "Example metric",
        kind: "custom",
        isNumeric: true,
        unitAggregationType: "sum",
        links: {
          "self": {
            href: "/api/v2/metrics/my-project/my-metric",
            type: "application/json",
          },
        },
        nameInGroup: "Step 1",
        randomizationUnits: [
          "user",
        ],
      },
      results: {
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
      },
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `links`                                                                        | Record<string, [models.Link](../models/link.md)>                               | :heavy_check_mark:                                                             | The location and content type of related resources                             |
| `metrics`                                                                      | [models.MetricInGroupResultsRep](../models/metricingroupresultsrep.md)[]       | :heavy_check_mark:                                                             | An ordered list of the metrics in this metric group, and each of their results |