# AIConfigTargetingPatch

## Example Usage

```typescript
import { AIConfigTargetingPatch } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingPatch = {
  comment: "comment",
  environmentKey: "environmentKey",
  instructions: [
    {
      "key": "",
    },
    {
      "key": "",
    },
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `comment`               | *string*                | :heavy_minus_sign:      | N/A                     |
| `environmentKey`        | *string*                | :heavy_check_mark:      | N/A                     |
| `instructions`          | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |