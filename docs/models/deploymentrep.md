# DeploymentRep

## Example Usage

```typescript
import { DeploymentRep } from "@launchdarkly/mcp-server";

let value: DeploymentRep = {
  id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
  applicationKey: "billing-service",
  applicationVersion: "a90a8a2",
  startedAt: 503515,
  durationMs: 10996000,
  status: "<value>",
  kind: "<value>",
  active: true,
  metadata: {
    "buildNumber": "1234",
  },
  archived: false,
  environmentKey: "production",
  numberOfContributors: 1,
  numberOfPullRequests: 2,
  linesAdded: 100,
  linesDeleted: 50,
  leadTime: 20237000,
  pullRequests: {
    totalCount: 25,
    items: [],
    links: {
      "next": {
        href:
          "/api/v2/engineering-insights/pull-requests?after=a4290006-1fd1-4ca5-acf7-9f31fac61cf5",
        type: "application/json",
      },
      "self": {
        href: "/api/v2/engineering-insights/pull-requests",
        type: "application/json",
      },
    },
  },
  flagReferences: {
    totalCount: 25,
    items: [
      {
        projectKey: "default",
        flagKey: "enable-new-payment-structure",
        referencesAdded: 2,
        referencesRemoved: 5,
      },
    ],
  },
  leadTimeStages: {
    codingDurationMs: 1000000,
    reviewDurationMs: 500000,
    waitDurationMs: 100000,
    deployDurationMs: 100000,
    totalLeadTimeMs: 1600000,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The deployment ID                                                            | a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11                                         |
| `applicationKey`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | The application key                                                          | billing-service                                                              |
| `applicationVersion`                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The application version                                                      | a90a8a2                                                                      |
| `startedAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `endedAt`                                                                    | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `durationMs`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | The duration of the deployment in milliseconds                               | 10996000                                                                     |
| `status`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `kind`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `active`                                                                     | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether the deployment is active                                             | true                                                                         |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | The metadata associated with the deployment                                  | {<br/>"buildNumber": "1234"<br/>}                                            |
| `archived`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether the deployment is archived                                           | false                                                                        |
| `environmentKey`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | The environment key                                                          | production                                                                   |
| `numberOfContributors`                                                       | *number*                                                                     | :heavy_check_mark:                                                           | The number of contributors                                                   | 1                                                                            |
| `numberOfPullRequests`                                                       | *number*                                                                     | :heavy_check_mark:                                                           | The number of pull requests                                                  | 2                                                                            |
| `linesAdded`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | The number of lines added                                                    | 100                                                                          |
| `linesDeleted`                                                               | *number*                                                                     | :heavy_check_mark:                                                           | The number of lines deleted                                                  | 50                                                                           |
| `leadTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | The total lead time from first commit to deployment end in milliseconds      | 20237000                                                                     |
| `pullRequests`                                                               | [models.PullRequestCollectionRep](../models/pullrequestcollectionrep.md)     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `flagReferences`                                                             | [models.FlagReferenceCollectionRep](../models/flagreferencecollectionrep.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `leadTimeStages`                                                             | [models.LeadTimeStagesRep](../models/leadtimestagesrep.md)                   | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |