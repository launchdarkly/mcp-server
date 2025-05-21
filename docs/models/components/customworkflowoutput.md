# CustomWorkflowOutput

## Example Usage

```typescript
import { CustomWorkflowOutput } from "@launchdarkly/mcp-server/models/components";

let value: CustomWorkflowOutput = {
  id: "12ab3c4d5ef1a2345bcde67f",
  version: 1,
  conflicts: [
    {
      stageId: "12ab3c4d5ef1a2345bcde67f",
      message: "<value>",
    },
  ],
  creationDate: 326677,
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
          description:
            "inconsequential unless simple dimly until criminal section",
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
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the workflow                                                                     | 12ab3c4d5ef1a2345bcde67f                                                                   |
| `version`                                                                                  | *number*                                                                                   | :heavy_check_mark:                                                                         | The version of the workflow                                                                | 1                                                                                          |
| `conflicts`                                                                                | [components.ConflictOutput](../../models/components/conflictoutput.md)[]                   | :heavy_check_mark:                                                                         | Any conflicts that are present in the workflow stages                                      |                                                                                            |
| `creationDate`                                                                             | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `maintainerId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | The member ID of the maintainer of the workflow. Defaults to the workflow creator.         | 12ab3c45de678910abc12345                                                                   |
| `links`                                                                                    | Record<string, [components.Link](../../models/components/link.md)>                         | :heavy_check_mark:                                                                         | The location and content type of related resources                                         |                                                                                            |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The name of the workflow                                                                   | Progressive rollout starting in two days                                                   |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | A brief description of the workflow                                                        | Turn flag on for 10% of customers each day                                                 |
| `kind`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | The kind of workflow                                                                       | custom                                                                                     |
| `stages`                                                                                   | [components.StageOutput](../../models/components/stageoutput.md)[]                         | :heavy_minus_sign:                                                                         | The stages that make up the workflow. Each stage contains conditions and actions.          |                                                                                            |
| `execution`                                                                                | [components.ExecutionOutput](../../models/components/executionoutput.md)                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `meta`                                                                                     | [components.WorkflowTemplateMetadata](../../models/components/workflowtemplatemetadata.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `templateKey`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | For workflows being created from a workflow template, this value is the template's key     | example-workflow-template                                                                  |