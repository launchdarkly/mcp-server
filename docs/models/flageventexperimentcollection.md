# FlagEventExperimentCollection

## Example Usage

```typescript
import { FlagEventExperimentCollection } from "@launchdarkly/mcp-server";

let value: FlagEventExperimentCollection = {
  totalCount: 1,
  items: [
    {
      key: "experiment-1",
      name: "Experiment 1",
      iteration: {
        id: "65baa44ecc4b5bce113bb4f7",
        status: "<value>",
        startedAt: 676264,
      },
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `totalCount`                                                     | *number*                                                         | :heavy_check_mark:                                               | The total number of experiments                                  | 1                                                                |
| `items`                                                          | [models.FlagEventExperiment](../models/flageventexperiment.md)[] | :heavy_check_mark:                                               | A list of experiments                                            |                                                                  |