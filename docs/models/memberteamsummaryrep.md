# MemberTeamSummaryRep

## Example Usage

```typescript
import { MemberTeamSummaryRep } from "@launchdarkly/mcp-server";

let value: MemberTeamSummaryRep = {
  customRoleKeys: [
    "access-to-test-projects",
  ],
  key: "team-key-123abc",
  name: "QA Team",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `customRoleKeys`                                           | *string*[]                                                 | :heavy_check_mark:                                         | A list of keys of the custom roles this team has access to | [<br/>"access-to-test-projects"<br/>]                      |
| `key`                                                      | *string*                                                   | :heavy_check_mark:                                         | The team key                                               | team-key-123abc                                            |
| `links`                                                    | Record<string, [models.Link](../models/link.md)>           | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | The team name                                              | QA Team                                                    |