# BulkEditTeamsRep

## Example Usage

```typescript
import { BulkEditTeamsRep } from "@launchdarkly/mcp-server";

let value: BulkEditTeamsRep = {
  memberIDs: [
    "1234a56b7c89d012345e678f",
  ],
  teamKeys: [
    "example-team-1",
  ],
  errors: [
    {
      "example-team-2": "example failure message",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `memberIDs`                                                        | *string*[]                                                         | :heavy_minus_sign:                                                 | A list of member IDs of the members who were added to the teams.   | [<br/>"1234a56b7c89d012345e678f"<br/>]                             |
| `teamKeys`                                                         | *string*[]                                                         | :heavy_minus_sign:                                                 | A list of team keys of the teams that were successfully updated.   | [<br/>"example-team-1"<br/>]                                       |
| `errors`                                                           | Record<string, *string*>[]                                         | :heavy_minus_sign:                                                 | A list of team keys and errors for the teams whose updates failed. | [<br/>{<br/>"example-team-2": "example failure message"<br/>}<br/>] |