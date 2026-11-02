# ExperimentPost

## Example Usage

```typescript
import { ExperimentPost } from "@launchdarkly/mcp-server/models/components";

let value: ExperimentPost = {
  name: "Example experiment",
  description: "An example experiment, used in testing",
  maintainerId: "12ab3c45de678910fgh12345",
  key: "experiment-key-123abc",
  iteration: {
    hypothesis:
      "Example hypothesis, the new button placement will increase conversion",
    canReshuffleTraffic: true,
    metrics: [
      {
        key: "metric-key-123abc",
        isGroup: true,
        analysisUnit: "user",
      },
    ],
    primarySingleMetricKey: "metric-key-123abc",
    primaryFunnelKey: "metric-group-key-123abc",
    treatments: [],
    flags: {
      "key": {
        ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
        flagConfigVersion: 12,
        notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
      },
    },
    randomizationUnit: "user",
    reallocationFrequencyMillis: 3600000,
    attributes: [
      "country",
      "device",
      "os",
    ],
  },
  holdoutId: "f3b74309-d581-44e1-8a2b-bb2933b4fe40",
  methodology: "frequentist",
  analysisConfig: {
    bayesianThreshold: "10",
    significanceThreshold: "5",
    multipleComparisonCorrectionMethod: "bonferroni",
    multipleComparisonCorrectionScope: "variations",
  },
  dataSource: "snowflake",
  type: "experiment",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The experiment name                                                                                                           | Example experiment                                                                                                            |
| `description`                                                                                                                 | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The experiment description                                                                                                    | An example experiment, used in testing                                                                                        |
| `maintainerId`                                                                                                                | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The ID of the member who maintains this experiment                                                                            | 12ab3c45de678910fgh12345                                                                                                      |
| `key`                                                                                                                         | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The experiment key                                                                                                            | experiment-key-123abc                                                                                                         |
| `iteration`                                                                                                                   | [components.IterationInput](../../models/components/iterationinput.md)                                                        | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `holdoutId`                                                                                                                   | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The ID of the holdout                                                                                                         | f3b74309-d581-44e1-8a2b-bb2933b4fe40                                                                                          |
| `tags`                                                                                                                        | *string*[]                                                                                                                    | :heavy_minus_sign:                                                                                                            | Tags for the experiment                                                                                                       |                                                                                                                               |
| `methodology`                                                                                                                 | [components.ExperimentPostMethodology](../../models/components/experimentpostmethodology.md)                                  | :heavy_minus_sign:                                                                                                            | The results analysis approach. Defaults to "frequentist" when not provided, or "bayesian" for multi-armed bandit experiments. | frequentist                                                                                                                   |
| `analysisConfig`                                                                                                              | [components.AnalysisConfigInput](../../models/components/analysisconfiginput.md)                                              | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `dataSource`                                                                                                                  | [components.ExperimentPostDataSource](../../models/components/experimentpostdatasource.md)                                    | :heavy_minus_sign:                                                                                                            | The source of metric data in order to analyze results. Defaults to "launchdarkly" when not provided.                          | snowflake                                                                                                                     |
| `type`                                                                                                                        | [components.ExperimentPostType](../../models/components/experimentposttype.md)                                                | :heavy_minus_sign:                                                                                                            | The type of experiment.                                                                                                       | experiment                                                                                                                    |