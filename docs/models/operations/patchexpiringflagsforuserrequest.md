# PatchExpiringFlagsForUserRequest

## Example Usage

```typescript
import { PatchExpiringFlagsForUserRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchExpiringFlagsForUserRequest = {
  projectKey: "<value>",
  userKey: "<value>",
  environmentKey: "<value>",
  patchUsersRequest: {
    comment: "optional comment",
    instructions: [
      {
        kind: "addExpireUserTargetDate",
        flagKey: "sample-flag-key",
        variationId: "ce12d345-a1b2-4fb5-a123-ab123d4d5f5d",
        value: 1653469200000,
        version: 1,
      },
    ],
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `projectKey`                                                  | *string*                                                      | :heavy_check_mark:                                            | The project key                                               |
| `userKey`                                                     | *string*                                                      | :heavy_check_mark:                                            | The user key                                                  |
| `environmentKey`                                              | *string*                                                      | :heavy_check_mark:                                            | The environment key                                           |
| `patchUsersRequest`                                           | [models.PatchUsersRequest](../../models/patchusersrequest.md) | :heavy_check_mark:                                            | N/A                                                           |