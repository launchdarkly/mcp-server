# WorkflowTemplateOutput

## Example Usage

```typescript
import { WorkflowTemplateOutput } from "@launchdarkly/mcp-server";

let value: WorkflowTemplateOutput = {
  id: "<id>",
  key: "<key>",
  creationDate: 832835,
  ownerId: "<id>",
  maintainerId: "<id>",
  links: {
    "key": {},
  },
  stages: [
    {
      id: "12ab3c45de678910abc12345",
      name: "10% rollout on day 1",
      conditions: [
        {
          id: "<id>",
          kind: "schedule",
          execution: {
            status: "completed",
          },
          scheduleKind: "relative",
          waitDuration: 2,
          waitDurationUnit: "calendarDay",
          description:
            "completion including colorize catalyze since an concerned",
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
        },
      ],
      action: {
        kind: "patch",
        instructions: [
          {
            "key": "<value>",
          },
        ],
      },
      execution: {
        status: "completed",
      },
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `key`                                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `name`                                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `creationDate`                                   | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `ownerId`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `maintainerId`                                   | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `links`                                          | Record<string, [models.Link](../models/link.md)> | :heavy_check_mark:                               | N/A                                              |
| `description`                                    | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `stages`                                         | [models.StageOutput](../models/stageoutput.md)[] | :heavy_minus_sign:                               | N/A                                              |