# FlagEventExperiment

## Example Usage

```typescript
import { FlagEventExperiment } from "@launchdarkly/mcp-server";

let value: FlagEventExperiment = {
  key: "experiment-1",
  name: "Experiment 1",
  iteration: {
    id: "65baa44ecc4b5bce113bb4f7",
    status: "<value>",
    startedAt: 924618,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `key`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | The experiment key                                                               | experiment-1                                                                     |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | The experiment name                                                              | Experiment 1                                                                     |
| `iteration`                                                                      | [models.FlagEventExperimentIteration](../models/flageventexperimentiteration.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `links`                                                                          | Record<string, [models.Link](../models/link.md)>                                 | :heavy_minus_sign:                                                               | The location and content type of related resources                               |                                                                                  |