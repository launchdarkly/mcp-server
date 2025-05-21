# PatchHoldoutRequest

## Example Usage

```typescript
import { PatchHoldoutRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchHoldoutRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  holdoutKey: "<value>",
  holdoutPatchInput: {
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectKey`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | The project key                                                              |
| `environmentKey`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | The environment key                                                          |
| `holdoutKey`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | The holdout key                                                              |
| `holdoutPatchInput`                                                          | [components.HoldoutPatchInput](../../models/components/holdoutpatchinput.md) | :heavy_check_mark:                                                           | N/A                                                                          |