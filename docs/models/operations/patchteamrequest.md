# PatchTeamRequest

## Example Usage

```typescript
import { PatchTeamRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchTeamRequest = {
  teamKey: "<value>",
  teamPatchInput: {
    comment: "Optional comment about the update",
    instructions: [
      {
        "key": "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `teamKey`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The team key                                                                                                                       |
| `expand`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. |
| `teamPatchInput`                                                                                                                   | [models.TeamPatchInput](../../models/teampatchinput.md)                                                                            | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |