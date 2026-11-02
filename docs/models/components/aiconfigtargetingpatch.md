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

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `comment`                                | *string*                                 | :heavy_minus_sign:                       | A comment describing the change          |
| `environmentKey`                         | *string*                                 | :heavy_check_mark:                       | The environment key                      |
| `instructions`                           | Record<string, *any*>[]                  | :heavy_check_mark:                       | The semantic patch instructions to apply |