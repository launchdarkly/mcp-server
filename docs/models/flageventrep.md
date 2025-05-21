# FlagEventRep

## Example Usage

```typescript
import { FlagEventRep } from "@launchdarkly/mcp-server";

let value: FlagEventRep = {
  id: "e3b2b0e0-9e9b-4c9a-8e9a-0e0e0e0e0e0e",
  projectId: "65baa44ecc4b5bce113bb4f7",
  projectKey: "default",
  environmentId: "65baa44ecc4b5bce113bb4f7",
  environmentKey: "production",
  flagKey: "enable-new-payment-method",
  eventType: "<value>",
  eventTime: 88837,
  description: "Targeting rule enabled",
  auditLogEntryId: "e3b2b0e0-9e9b-4c9a-8e9a-0e0e0e0e0e0e",
  member: {
    id: "65baa44ecc4b5bce113bb4f7",
    email: "test@launchdarkly.com",
    firstName: "Zachery",
    lastName: "Volkman",
  },
  impact: {
    size: "medium",
    percentage: 50,
    evaluationsSummary: {
      variations: [
        {
          value: "true",
          before: 1000,
          after: 500,
        },
      ],
    },
  },
  experiments: {
    totalCount: 1,
    items: [
      {
        key: "experiment-1",
        name: "Experiment 1",
        iteration: {
          id: "65baa44ecc4b5bce113bb4f7",
          status: "<value>",
          startedAt: 378251,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | The flag event ID                                                                  | e3b2b0e0-9e9b-4c9a-8e9a-0e0e0e0e0e0e                                               |
| `projectId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The project ID                                                                     | 65baa44ecc4b5bce113bb4f7                                                           |
| `projectKey`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | The project key                                                                    | default                                                                            |
| `environmentId`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The environment ID                                                                 | 65baa44ecc4b5bce113bb4f7                                                           |
| `environmentKey`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | The environment key                                                                | production                                                                         |
| `flagKey`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | The flag key                                                                       | enable-new-payment-method                                                          |
| `eventType`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `eventTime`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `description`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | The event description                                                              | Targeting rule enabled                                                             |
| `auditLogEntryId`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | The audit log entry ID                                                             | e3b2b0e0-9e9b-4c9a-8e9a-0e0e0e0e0e0e                                               |
| `member`                                                                           | [models.FlagEventMemberRep](../models/flageventmemberrep.md)                       | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `actions`                                                                          | *string*[]                                                                         | :heavy_minus_sign:                                                                 | The resource actions                                                               |                                                                                    |
| `impact`                                                                           | [models.FlagEventImpactRep](../models/flageventimpactrep.md)                       | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `experiments`                                                                      | [models.FlagEventExperimentCollection](../models/flageventexperimentcollection.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |