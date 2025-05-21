# DeleteFlagFollowerRequest

## Example Usage

```typescript
import { DeleteFlagFollowerRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteFlagFollowerRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  memberId: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The project key                                                                                          |
| `featureFlagKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The feature flag key                                                                                     |
| `environmentKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The environment key                                                                                      |
| `memberId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The memberId of the member to remove as a follower of the flag. Reader roles can only remove themselves. |