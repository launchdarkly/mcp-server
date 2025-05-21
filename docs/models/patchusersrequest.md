# PatchUsersRequest

## Example Usage

```typescript
import { PatchUsersRequest } from "@launchdarkly/mcp-server";

let value: PatchUsersRequest = {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `comment`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Optional comment describing the change                                 | optional comment                                                       |
| `instructions`                                                         | [models.InstructionUserRequest](../models/instructionuserrequest.md)[] | :heavy_check_mark:                                                     | The instructions to perform when updating                              |                                                                        |