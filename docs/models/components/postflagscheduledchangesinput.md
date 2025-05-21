# PostFlagScheduledChangesInput

## Example Usage

```typescript
import { PostFlagScheduledChangesInput } from "@launchdarkly/mcp-server/models/components";

let value: PostFlagScheduledChangesInput = {
  comment: "optional comment",
  executionDate: 812166,
  instructions: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `comment`                                         | *string*                                          | :heavy_minus_sign:                                | Optional comment describing the scheduled changes | optional comment                                  |
| `executionDate`                                   | *number*                                          | :heavy_check_mark:                                | N/A                                               |                                                   |
| `instructions`                                    | Record<string, *any*>[]                           | :heavy_check_mark:                                | N/A                                               |                                                   |