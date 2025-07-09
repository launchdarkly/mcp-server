# AiConfigsExperimentEnvironmentSettingRep

## Example Usage

```typescript
import { AiConfigsExperimentEnvironmentSettingRep } from "@launchdarkly/mcp-server/models/components";

let value: AiConfigsExperimentEnvironmentSettingRep = {
  startDate: 1,
  stopDate: 6,
  enabledPeriods: [
    {
      startDate: 7,
      stopDate: 1,
    },
    {
      startDate: 7,
      stopDate: 1,
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `startDate`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `stopDate`                                                                                                         | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `enabledPeriods`                                                                                                   | [components.AiConfigsExperimentEnabledPeriodRep](../../models/components/aiconfigsexperimentenabledperiodrep.md)[] | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |