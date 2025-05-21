# FlagScheduledChangesInput

## Example Usage

```typescript
import { FlagScheduledChangesInput } from "@launchdarkly/mcp-server";

let value: FlagScheduledChangesInput = {
  comment: "optional comment",
  instructions: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `comment`                                                       | *string*                                                        | :heavy_minus_sign:                                              | Optional comment describing the update to the scheduled changes | optional comment                                                |
| `instructions`                                                  | Record<string, *any*>[]                                         | :heavy_check_mark:                                              | N/A                                                             |                                                                 |