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
  holdoutId: "f3b74309-d581-44e1-8a2b-bb2933b4fe40",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The experiment name                                                    | Example experiment                                                     |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | The experiment description                                             | An example experiment, used in testing                                 |
| `maintainerId`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | The ID of the member who maintains this experiment                     | 12ab3c45de678910fgh12345                                               |
| `key`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | The experiment key                                                     | experiment-key-123abc                                                  |
| `iteration`                                                            | [components.IterationInput](../../models/components/iterationinput.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `holdoutId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | The ID of the holdout                                                  | f3b74309-d581-44e1-8a2b-bb2933b4fe40                                   |