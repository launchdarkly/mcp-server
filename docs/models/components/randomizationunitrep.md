# RandomizationUnitRep

## Example Usage

```typescript
import { RandomizationUnitRep } from "@launchdarkly/mcp-server/models/components";

let value: RandomizationUnitRep = {
  randomizationUnit: "user",
  standardRandomizationUnit: "user",
  default: true,
  displayName: "User",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `randomizationUnit`                                                                        | *string*                                                                                   | :heavy_minus_sign:                                                                         | The unit of randomization. Defaults to user.                                               | user                                                                                       |
| `standardRandomizationUnit`                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | One of LaunchDarkly's fixed set of standard randomization units.                           | user                                                                                       |
| `default`                                                                                  | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether this randomization unit is the default for experiments                             | true                                                                                       |
| `hidden`                                                                                   | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `displayName`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | The display name for the randomization unit, displayed in the LaunchDarkly user interface. | User                                                                                       |