# PatchExpiringTargetsForSegmentRequest

## Example Usage

```typescript
import { PatchExpiringTargetsForSegmentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchExpiringTargetsForSegmentRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  segmentKey: "<value>",
  patchSegmentExpiringTargetInputRep: {
    comment: "optional comment",
    instructions: [
      {
        kind: "updateExpiringTarget",
        contextKey: "user@email.com",
        contextKind: "user",
        targetType: "included",
        value: 1587582000000,
        version: 0,
      },
    ],
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The project key                                                                                 |
| `environmentKey`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | The environment key                                                                             |
| `segmentKey`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The segment key                                                                                 |
| `patchSegmentExpiringTargetInputRep`                                                            | [models.PatchSegmentExpiringTargetInputRep](../../models/patchsegmentexpiringtargetinputrep.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |