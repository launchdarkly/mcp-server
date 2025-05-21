# PatchExpiringUserTargetsForSegmentRequest

## Example Usage

```typescript
import { PatchExpiringUserTargetsForSegmentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchExpiringUserTargetsForSegmentRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  segmentKey: "<value>",
  patchSegmentRequest: {
    comment: "optional comment",
    instructions: [
      {
        kind: "updateExpireUserTargetDate",
        userKey: "<value>",
        targetType: "included",
        value: 1587582000000,
        version: 0,
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `projectKey`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | The project key                                                                  |
| `environmentKey`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | The environment key                                                              |
| `segmentKey`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | The segment key                                                                  |
| `patchSegmentRequest`                                                            | [components.PatchSegmentRequest](../../models/components/patchsegmentrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |