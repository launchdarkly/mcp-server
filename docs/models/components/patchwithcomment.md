# PatchWithComment

## Example Usage

```typescript
import { PatchWithComment } from "@launchdarkly/mcp-server/models/components";

let value: PatchWithComment = {
  patch: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `patch`                                                                  | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `comment`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | Optional comment                                                         |