# RandomizationSettingsPut

## Example Usage

```typescript
import { RandomizationSettingsPut } from "@launchdarkly/mcp-server";

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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `randomizationUnits`                                                   | [models.RandomizationUnitInput](../models/randomizationunitinput.md)[] | :heavy_check_mark:                                                     | An array of randomization units allowed for this project.              |