# ActionOutput

## Example Usage

```typescript
import { ActionOutput } from "@launchdarkly/mcp-server/models/components";

let value: ActionOutput = {
  kind: "patch",
  instructions: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `kind`                            | *string*                          | :heavy_check_mark:                | The type of action for this stage | patch                             |
| `instructions`                    | Record<string, *any*>[]           | :heavy_check_mark:                | N/A                               |                                   |