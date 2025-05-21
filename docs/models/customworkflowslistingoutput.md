# CustomWorkflowsListingOutput

## Example Usage

```typescript
import { CustomWorkflowsListingOutput } from "@launchdarkly/mcp-server";

let value: CustomWorkflowsListingOutput = {
  items: [
    {
      id: "12ab3c4d5ef1a2345bcde67f",
      version: 1,
      conflicts: [
        {
          stageId: "12ab3c4d5ef1a2345bcde67f",
          message: "<value>",
        },
      ],
      creationDate: 576295,
      maintainerId: "12ab3c45de678910abc12345",
      links: {
        "key": {},
      },
      name: "Progressive rollout starting in two days",
      description: "Turn flag on for 10% of customers each day",
      kind: "custom",
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
              description: "unless er questionable pish",
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
      execution: {
        status: "completed",
      },
      templateKey: "example-workflow-template",
    },
  ],
  totalCount: 1,
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `items`                                                            | [models.CustomWorkflowOutput](../models/customworkflowoutput.md)[] | :heavy_check_mark:                                                 | An array of workflows                                              |                                                                    |
| `totalCount`                                                       | *number*                                                           | :heavy_check_mark:                                                 | Total number of workflows                                          | 1                                                                  |
| `links`                                                            | Record<string, [models.Link](../models/link.md)>                   | :heavy_check_mark:                                                 | The location and content type of related resources                 |                                                                    |