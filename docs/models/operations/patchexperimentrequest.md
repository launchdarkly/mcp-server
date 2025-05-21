# PatchExperimentRequest

## Example Usage

```typescript
import { PatchExperimentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchExperimentRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  experimentKey: "<value>",
  experimentPatchInput: {
    comment: "Optional comment",
    instructions: [
      {
        "key": "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `projectKey`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The project key                                                     |
| `environmentKey`                                                    | *string*                                                            | :heavy_check_mark:                                                  | The environment key                                                 |
| `experimentKey`                                                     | *string*                                                            | :heavy_check_mark:                                                  | The experiment key                                                  |
| `experimentPatchInput`                                              | [models.ExperimentPatchInput](../../models/experimentpatchinput.md) | :heavy_check_mark:                                                  | N/A                                                                 |