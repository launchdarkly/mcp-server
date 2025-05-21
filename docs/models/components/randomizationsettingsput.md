# RandomizationSettingsPut

## Example Usage

```typescript
import { RandomizationSettingsPut } from "@launchdarkly/mcp-server/models/components";

let value: RandomizationSettingsPut = {
  randomizationUnits: [
    {
      randomizationUnit: "user",
      default: true,
      standardRandomizationUnit: "guestTime",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `randomizationUnits`                                                                     | [components.RandomizationUnitInput](../../models/components/randomizationunitinput.md)[] | :heavy_check_mark:                                                                       | An array of randomization units allowed for this project.                                |