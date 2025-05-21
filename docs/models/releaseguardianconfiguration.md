# ReleaseGuardianConfiguration

## Example Usage

```typescript
import { ReleaseGuardianConfiguration } from "@launchdarkly/mcp-server";

let value: ReleaseGuardianConfiguration = {
  monitoringWindowMilliseconds: 60000,
  rolloutWeight: 50,
  rollbackOnRegression: true,
  randomizationUnit: "user",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `monitoringWindowMilliseconds`                  | *number*                                        | :heavy_check_mark:                              | The monitoring window in milliseconds           | 60000                                           |
| `rolloutWeight`                                 | *number*                                        | :heavy_check_mark:                              | The rollout weight percentage                   | 50                                              |
| `rollbackOnRegression`                          | *boolean*                                       | :heavy_check_mark:                              | Whether or not to roll back on regression       | true                                            |
| `randomizationUnit`                             | *string*                                        | :heavy_minus_sign:                              | The randomization unit for the measured rollout | user                                            |