# ExperimentEnvironmentSettingRep

## Example Usage

```typescript
import { ExperimentEnvironmentSettingRep } from "@launchdarkly/mcp-server";

let value: ExperimentEnvironmentSettingRep = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `startDate`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `stopDate`                                                                     | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `enabledPeriods`                                                               | [models.ExperimentEnabledPeriodRep](../models/experimentenabledperiodrep.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |