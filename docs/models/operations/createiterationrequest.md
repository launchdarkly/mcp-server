# CreateIterationRequest

## Example Usage

```typescript
import { CreateIterationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateIterationRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  experimentKey: "<value>",
  iterationInput: {
    hypothesis:
      "Example hypothesis, the new button placement will increase conversion",
    canReshuffleTraffic: true,
    metrics: [
      {
        key: "metric-key-123abc",
        isGroup: true,
      },
    ],
    primarySingleMetricKey: "metric-key-123abc",
    primaryFunnelKey: "metric-group-key-123abc",
    treatments: [
      {
        name: "Treatment 1",
        baseline: true,
        allocationPercent: "10",
        parameters: [
          {
            flagKey: "example-flag-for-experiment",
            variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
          },
        ],
      },
    ],
    flags: {
      "key": {
        ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
        flagConfigVersion: 12,
        notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
      },
    },
    randomizationUnit: "user",
    attributes: [
      "country",
      "device",
      "os",
    ],
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `projectKey`                                            | *string*                                                | :heavy_check_mark:                                      | The project key                                         |
| `environmentKey`                                        | *string*                                                | :heavy_check_mark:                                      | The environment key                                     |
| `experimentKey`                                         | *string*                                                | :heavy_check_mark:                                      | The experiment key                                      |
| `iterationInput`                                        | [models.IterationInput](../../models/iterationinput.md) | :heavy_check_mark:                                      | N/A                                                     |