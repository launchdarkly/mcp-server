# AiConfigsExperimentEnvironmentSettingRep

## Example Usage

```typescript
import { AiConfigsExperimentEnvironmentSettingRep } from "@launchdarkly/mcp-server/models/components";

let value: AiConfigsExperimentEnvironmentSettingRep = {
  startDate: 6,
  stopDate: 8,
  enabledPeriods: [
    {
      startDate: 9,
      stopDate: 6,
    },
    {
      startDate: 9,
      stopDate: 6,
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