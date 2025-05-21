# CustomWorkflowStageMeta

## Example Usage

```typescript
import { CustomWorkflowStageMeta } from "@launchdarkly/mcp-server";

let value: CustomWorkflowStageMeta = {
  index: 0,
  name: "Stage 1",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `index`                                    | *number*                                   | :heavy_minus_sign:                         | The zero-based index of the workflow stage | 0                                          |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | The name of the workflow stage             | Stage 1                                    |