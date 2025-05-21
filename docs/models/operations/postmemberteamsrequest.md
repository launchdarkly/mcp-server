# PostMemberTeamsRequest

## Example Usage

```typescript
import { PostMemberTeamsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostMemberTeamsRequest = {
  id: "<value>",
  memberTeamsPostInput: {
    teamKeys: [
      "team1",
      "team2",
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | The member ID                                                                      |
| `memberTeamsPostInput`                                                             | [components.MemberTeamsPostInput](../../models/components/memberteamspostinput.md) | :heavy_check_mark:                                                                 | N/A                                                                                |