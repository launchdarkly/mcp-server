# TeamPostInput

## Example Usage

```typescript
import { TeamPostInput } from "@launchdarkly/mcp-server";

let value: TeamPostInput = {
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
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `customRoleKeys`                                                                                                                    | *string*[]                                                                                                                          | :heavy_minus_sign:                                                                                                                  | List of custom role keys the team will access                                                                                       | [<br/>"example-role1",<br/>"example-role2"<br/>]                                                                                    |
| `description`                                                                                                                       | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | A description of the team                                                                                                           | An example team                                                                                                                     |
| `key`                                                                                                                               | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The team key                                                                                                                        | team-key-123abc                                                                                                                     |
| `memberIDs`                                                                                                                         | *string*[]                                                                                                                          | :heavy_minus_sign:                                                                                                                  | A list of member IDs who belong to the team                                                                                         | [<br/>"12ab3c45de678910fgh12345"<br/>]                                                                                              |
| `name`                                                                                                                              | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | A human-friendly name for the team                                                                                                  | Example team                                                                                                                        |
| `permissionGrants`                                                                                                                  | [models.PermissionGrantInput](../models/permissiongrantinput.md)[]                                                                  | :heavy_minus_sign:                                                                                                                  | A list of permission grants. Permission grants allow access to a specific action, without having to create or update a custom role. |                                                                                                                                     |
| `roleAttributes`                                                                                                                    | Record<string, *string*[]>                                                                                                          | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |                                                                                                                                     |