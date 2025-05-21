# PutFlagFollowerRequest

## Example Usage

```typescript
import { PutFlagFollowerRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PutFlagFollowerRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  environmentKey: "<value>",
  memberId: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | The project key                                                                                    |
| `featureFlagKey`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The feature flag key                                                                               |
| `environmentKey`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The environment key                                                                                |
| `memberId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | The memberId of the member to add as a follower of the flag. Reader roles can only add themselves. |