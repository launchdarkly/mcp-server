# PatchWithComment

## Example Usage

```typescript
import { PatchWithComment } from "@launchdarkly/mcp-server";

let value: PatchWithComment = {
  patch: [
    {
      op: "replace",
      path: "/exampleField",
      value: "new example value",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `patch`                                                | [models.PatchOperation](../models/patchoperation.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `comment`                                              | *string*                                               | :heavy_minus_sign:                                     | Optional comment                                       |