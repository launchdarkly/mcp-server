# FlagInput

## Example Usage

```typescript
import { FlagInput } from "@launchdarkly/mcp-server";

let value: FlagInput = {
  ruleId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
  flagConfigVersion: 12,
  notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `ruleId`                                                                                                                                 | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The ID of the variation or rollout of the flag to use. Use "fallthrough" for the default targeting behavior when the flag is on.         | e432f62b-55f6-49dd-a02f-eb24acf39d05                                                                                                     |
| `flagConfigVersion`                                                                                                                      | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The flag version                                                                                                                         | 12                                                                                                                                       |
| `notInExperimentVariationId`                                                                                                             | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The ID of the variation to route traffic not part of the experiment analysis to. Defaults to variation ID of baseline treatment, if set. | e432f62b-55f6-49dd-a02f-eb24acf39d05                                                                                                     |