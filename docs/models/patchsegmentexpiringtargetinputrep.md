# PatchSegmentExpiringTargetInputRep

## Example Usage

```typescript
import { PatchSegmentExpiringTargetInputRep } from "@launchdarkly/mcp-server";

let value: PatchSegmentExpiringTargetInputRep = {
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
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   | Example                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                                                     | *string*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Optional description of changes                                                                                                                               | optional comment                                                                                                                                              |
| `instructions`                                                                                                                                                | [models.PatchSegmentExpiringTargetInstruction](../models/patchsegmentexpiringtargetinstruction.md)[]                                                          | :heavy_check_mark:                                                                                                                                            | Semantic patch instructions for the desired changes to the resource                                                                                           | [<br/>{<br/>"contextKey": "user@email.com",<br/>"contextKind": "user",<br/>"kind": "updateExpiringTarget",<br/>"targetType": "included",<br/>"value": 1587582000000,<br/>"version": 0<br/>}<br/>] |