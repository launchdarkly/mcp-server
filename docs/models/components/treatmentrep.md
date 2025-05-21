# TreatmentRep

## Example Usage

```typescript
import { TreatmentRep } from "@launchdarkly/mcp-server/models/components";

let value: TreatmentRep = {
  id: "122c9f3e-da26-4321-ba68-e0fc02eced58",
  name: "Treatment 1",
  allocationPercent: "10",
  baseline: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | The treatment ID. This is the variation ID from the flag.                  | 122c9f3e-da26-4321-ba68-e0fc02eced58                                       |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The treatment name. This is the variation name from the flag.              | Treatment 1                                                                |
| `allocationPercent`                                                        | *string*                                                                   | :heavy_check_mark:                                                         | The percentage of traffic allocated to this treatment during the iteration | 10                                                                         |
| `baseline`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether this treatment is the baseline to compare other treatments against | true                                                                       |
| `parameters`                                                               | [components.ParameterRep](../../models/components/parameterrep.md)[]       | :heavy_minus_sign:                                                         | Details on the flag and variation used for this treatment                  |                                                                            |