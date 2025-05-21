# HoldoutPatchInput

## Example Usage

```typescript
import { HoldoutPatchInput } from "@launchdarkly/mcp-server";

let value: HoldoutPatchInput = {
  comment: "Optional comment",
  instructions: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `comment`                              | *string*                               | :heavy_minus_sign:                     | Optional comment describing the update | Optional comment                       |
| `instructions`                         | Record<string, *any*>[]                | :heavy_check_mark:                     | N/A                                    |                                        |