# ReleaseGuardianConfigurationInput

## Example Usage

```typescript
import { ReleaseGuardianConfigurationInput } from "@launchdarkly/mcp-server";

let value: ReleaseGuardianConfigurationInput = {
  monitoringWindowMilliseconds: 60000,
  rolloutWeight: 50,
  rollbackOnRegression: true,
  randomizationUnit: "user",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `monitoringWindowMilliseconds`                  | *number*                                        | :heavy_minus_sign:                              | The monitoring window in milliseconds           | 60000                                           |
| `rolloutWeight`                                 | *number*                                        | :heavy_minus_sign:                              | The rollout weight                              | 50                                              |
| `rollbackOnRegression`                          | *boolean*                                       | :heavy_minus_sign:                              | Whether or not to rollback on regression        | true                                            |
| `randomizationUnit`                             | *string*                                        | :heavy_minus_sign:                              | The randomization unit for the measured rollout | user                                            |