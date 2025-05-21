# PutExperimentationSettingsRequest

## Example Usage

```typescript
import { PutExperimentationSettingsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PutExperimentationSettingsRequest = {
  projectKey: "<value>",
  randomizationSettingsPut: {
    randomizationUnits: [
      {
        randomizationUnit: "user",
        default: true,
        standardRandomizationUnit: "organization",
      },
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `projectKey`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | The project key                                                             |
| `randomizationSettingsPut`                                                  | [models.RandomizationSettingsPut](../../models/randomizationsettingsput.md) | :heavy_check_mark:                                                          | N/A                                                                         |