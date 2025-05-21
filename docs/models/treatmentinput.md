# TreatmentInput

## Example Usage

```typescript
import { TreatmentInput } from "@launchdarkly/mcp-server";

let value: TreatmentInput = {
  name: "Treatment 1",
  baseline: true,
  allocationPercent: "10",
  parameters: [
    {
      flagKey: "example-flag-for-experiment",
      variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The treatment name                                                         | Treatment 1                                                                |
| `baseline`                                                                 | *boolean*                                                                  | :heavy_check_mark:                                                         | Whether this treatment is the baseline to compare other treatments against | true                                                                       |
| `allocationPercent`                                                        | *string*                                                                   | :heavy_check_mark:                                                         | The percentage of traffic allocated to this treatment during the iteration | 10                                                                         |
| `parameters`                                                               | [models.TreatmentParameterInput](../models/treatmentparameterinput.md)[]   | :heavy_check_mark:                                                         | Details on the flag and variation to use for this treatment                |                                                                            |