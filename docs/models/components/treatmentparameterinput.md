# TreatmentParameterInput

## Example Usage

```typescript
import { TreatmentParameterInput } from "@launchdarkly/mcp-server/models/components";

let value: TreatmentParameterInput = {
  flagKey: "example-flag-for-experiment",
  variationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `flagKey`                            | *string*                             | :heavy_check_mark:                   | The flag key                         | example-flag-for-experiment          |
| `variationId`                        | *string*                             | :heavy_check_mark:                   | The ID of the flag variation         | e432f62b-55f6-49dd-a02f-eb24acf39d05 |