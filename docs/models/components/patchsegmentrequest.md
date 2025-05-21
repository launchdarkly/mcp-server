# PatchSegmentRequest

## Example Usage

```typescript
import { PatchSegmentRequest } from "@launchdarkly/mcp-server/models/components";

let value: PatchSegmentRequest = {
  comment: "optional comment",
  instructions: [
    {
      kind: "addExpireUserTargetDate",
      userKey: "<value>",
      targetType: "included",
      value: 1587582000000,
      version: 0,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               | Example                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                                                 | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Optional description of changes                                                                                                                           | optional comment                                                                                                                                          |
| `instructions`                                                                                                                                            | [components.PatchSegmentInstruction](../../models/components/patchsegmentinstruction.md)[]                                                                | :heavy_check_mark:                                                                                                                                        | Semantic patch instructions for the desired changes to the resource                                                                                       | [<br/>{<br/>"contextKey": "contextKey",<br/>"contextKind": "user",<br/>"kind": "updateExpiringTarget",<br/>"targetType": "included",<br/>"value": 1587582000000,<br/>"version": 0<br/>}<br/>] |