# WorkflowTemplatesListingOutputRep

## Example Usage

```typescript
import { WorkflowTemplatesListingOutputRep } from "@launchdarkly/mcp-server/models/components";

let value: WorkflowTemplatesListingOutputRep = {
  items: [
    {
      id: "<id>",
      key: "<key>",
      creationDate: 28575,
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
                "likewise calculus opposite highly offensively now story fake grown crossly",
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
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `items`                                                                                  | [components.WorkflowTemplateOutput](../../models/components/workflowtemplateoutput.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |