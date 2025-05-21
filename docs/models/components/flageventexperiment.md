# FlagEventExperiment

## Example Usage

```typescript
import { FlagEventExperiment } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `key`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | The experiment key                                                                                 | experiment-1                                                                                       |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The experiment name                                                                                | Experiment 1                                                                                       |
| `iteration`                                                                                        | [components.FlagEventExperimentIteration](../../models/components/flageventexperimentiteration.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `links`                                                                                            | Record<string, [components.Link](../../models/components/link.md)>                                 | :heavy_minus_sign:                                                                                 | The location and content type of related resources                                                 |                                                                                                    |