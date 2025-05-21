# MembersPatchInput

## Example Usage

```typescript
import { MembersPatchInput } from "@launchdarkly/mcp-server";

let value: MembersPatchInput = {
  comment: "Optional comment about the update",
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
| `comment`                              | *string*                               | :heavy_minus_sign:                     | Optional comment describing the update | Optional comment about the update      |
| `instructions`                         | Record<string, *any*>[]                | :heavy_check_mark:                     | N/A                                    |                                        |