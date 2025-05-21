# FlagSempatch

## Example Usage

```typescript
import { FlagSempatch } from "@launchdarkly/mcp-server";

let value: FlagSempatch = {
  instructions: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `instructions`          | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |
| `comment`               | *string*                | :heavy_minus_sign:      | N/A                     |