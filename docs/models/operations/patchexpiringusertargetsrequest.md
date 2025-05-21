# PatchExpiringUserTargetsRequest

## Example Usage

```typescript
import { PatchExpiringUserTargetsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchExpiringUserTargetsRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  featureFlagKey: "<value>",
  patchFlagsRequest: {
    comment: "optional comment",
    instructions: [
      {
        "kind": "addExpireUserTargetDate",
        "userKey": "sandy",
        "value": 1686412800000,
        "variationId": "ce12d345-a1b2-4fb5-a123-ab123d4d5f5d",
      },
    ],
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `projectKey`                                                  | *string*                                                      | :heavy_check_mark:                                            | The project key                                               |
| `environmentKey`                                              | *string*                                                      | :heavy_check_mark:                                            | The environment key                                           |
| `featureFlagKey`                                              | *string*                                                      | :heavy_check_mark:                                            | The feature flag key                                          |
| `patchFlagsRequest`                                           | [models.PatchFlagsRequest](../../models/patchflagsrequest.md) | :heavy_check_mark:                                            | N/A                                                           |