# HoldoutPostRequest

## Example Usage

```typescript
import { HoldoutPostRequest } from "@launchdarkly/mcp-server";

let value: HoldoutPostRequest = {
  name: "holdout-one-name",
  key: "holdout-key",
  description: "My holdout-one description",
  randomizationunit: "user",
  attributes: [
    "country",
    "device",
    "os",
  ],
  holdoutamount: "10",
  primarymetrickey: "metric-key-123abc",
  metrics: [
    {
      key: "metric-key-123abc",
      isGroup: true,
    },
  ],
  prerequisiteflagkey: "flag-key-123abc",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | A human-friendly name for the holdout                                | holdout-one-name                                                     |
| `key`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | A key that identifies the holdout                                    | holdout-key                                                          |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Description of the holdout                                           | My holdout-one description                                           |
| `randomizationunit`                                                  | *string*                                                             | :heavy_minus_sign:                                                   | The chosen randomization unit for the holdout base experiment        | user                                                                 |
| `attributes`                                                         | *string*[]                                                           | :heavy_minus_sign:                                                   | The attributes that the holdout iteration's results can be sliced by | [<br/>"country",<br/>"device",<br/>"os"<br/>]                        |
| `holdoutamount`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | Audience allocation for the holdout                                  | 10                                                                   |
| `primarymetrickey`                                                   | *string*                                                             | :heavy_minus_sign:                                                   | The key of the primary metric for this holdout                       | metric-key-123abc                                                    |
| `metrics`                                                            | [models.MetricInput](../models/metricinput.md)[]                     | :heavy_minus_sign:                                                   | Details on the metrics for this experiment                           |                                                                      |
| `prerequisiteflagkey`                                                | *string*                                                             | :heavy_minus_sign:                                                   | The key of the flag that the holdout is dependent on                 | flag-key-123abc                                                      |
| `maintainerId`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | Maintainer id                                                        |                                                                      |