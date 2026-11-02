# CreateExperimentRequest

## Example Usage

```typescript
import { CreateExperimentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateExperimentRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  experimentPost: {
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
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectKey`                                                           | *string*                                                               | :heavy_check_mark:                                                     | The project key                                                        |
| `environmentKey`                                                       | *string*                                                               | :heavy_check_mark:                                                     | The environment key                                                    |
| `experimentPost`                                                       | [components.ExperimentPost](../../models/components/experimentpost.md) | :heavy_check_mark:                                                     | N/A                                                                    |