# ConditionOutput

## Example Usage

```typescript
import { ConditionOutput } from "@launchdarkly/mcp-server";

let value: ConditionOutput = {
  id: "<id>",
  execution: {
    status: "completed",
  },
  description: "cow jam-packed comfortable",
  notifyMemberIds: [
    "<value>",
  ],
  allReviews: [
    {
      id: "<id>",
      kind: "<value>",
    },
  ],
  reviewStatus: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `kind`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `execution`                                            | [models.ExecutionOutput](../models/executionoutput.md) | :heavy_check_mark:                                     | N/A                                                    |
| `scheduleKind`                                         | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `executionDate`                                        | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `waitDuration`                                         | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `waitDurationUnit`                                     | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `description`                                          | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `notifyMemberIds`                                      | *string*[]                                             | :heavy_check_mark:                                     | N/A                                                    |
| `allReviews`                                           | [models.ReviewOutput](../models/reviewoutput.md)[]     | :heavy_check_mark:                                     | N/A                                                    |
| `reviewStatus`                                         | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `appliedDate`                                          | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |