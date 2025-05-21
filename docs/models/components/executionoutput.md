# ExecutionOutput

## Example Usage

```typescript
import { ExecutionOutput } from "@launchdarkly/mcp-server/models/components";

let value: ExecutionOutput = {
  status: "completed",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `status`                                           | *string*                                           | :heavy_check_mark:                                 | The status of the execution of this workflow stage | completed                                          |
| `stopDate`                                         | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |                                                    |