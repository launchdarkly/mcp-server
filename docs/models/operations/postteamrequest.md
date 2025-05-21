# PostTeamRequest

## Example Usage

```typescript
import { PostTeamRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostTeamRequest = {
  teamPostInput: {
    customRoleKeys: [
      "example-role1",
      "example-role2",
    ],
    description: "An example team",
    key: "team-key-123abc",
    memberIDs: [
      "12ab3c45de678910fgh12345",
    ],
    name: "Example team",
    permissionGrants: [
      {
        actionSet: "maintainTeam",
        actions: [
          "updateTeamMembers",
        ],
        memberIDs: [
          "12ab3c45de678910fgh12345",
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `expand`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. |
| `teamPostInput`                                                                                                                    | [components.TeamPostInput](../../models/components/teampostinput.md)                                                               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |