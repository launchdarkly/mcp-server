# RelativeDifferenceRep

## Example Usage

```typescript
import { RelativeDifferenceRep } from "@launchdarkly/mcp-server";

let value: RelativeDifferenceRep = {
  upper: 0.42655970355712425,
  lower: -0.13708601934659803,
  fromTreatmentId: "92b8354e-360e-4d67-8f13-fa6a46ca8077",
  variance: 4.23,
  varianceReduction: 0.1,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `upper`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | An upper bound of the relative difference between the treatment and the <code>fromTreatmentId</code> | 0.42655970355712425                                                                                  |
| `lower`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | A lower bound of the relative difference between the treatment and the <code>fromTreatmentId</code>  | -0.13708601934659803                                                                                 |
| `fromTreatmentId`                                                                                    | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The treatment ID of the treatment against which the relative difference is calculated                | 92b8354e-360e-4d67-8f13-fa6a46ca8077                                                                 |
| `variance`                                                                                           | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Variance of the relative difference                                                                  | 4.23                                                                                                 |
| `varianceReduction`                                                                                  | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The reduction in variance resulting from CUPED                                                       | 0.1                                                                                                  |