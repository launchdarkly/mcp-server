# PullRequestRep

## Example Usage

```typescript
import { PullRequestRep } from "@launchdarkly/mcp-server";

let value: PullRequestRep = {
  id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
  externalId: "1234",
  title: "Enable new payment structure",
  status: "merged",
  author: "jane.doe",
  createTime: 279710,
  mergeCommitKey: "a90a8a2",
  baseCommitKey: "a90a8a2",
  headCommitKey: "a90a8a2",
  filesChanged: 2,
  linesAdded: 100,
  linesDeleted: 50,
  url: "https://github.com/launchdarkly/LaunchDarkly-Docs/pull/406",
  deployments: {
    totalCount: 25,
    items: [],
    links: {
      "next": {
        href:
          "/api/v2/engineering-insights/deployments?after=a4290006-1fd1-4ca5-acf7-9f31fac61cf5",
        type: "application/json",
      },
      "self": {
        href: "/api/v2/engineering-insights/deployments",
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
  leadTime: {
    codingDurationMs: 1000000,
    reviewDurationMs: 500000,
    maxWaitDurationMs: 100000,
    avgWaitDurationMs: 100000,
    maxDeployDurationMs: 100000,
    avgDeployDurationMs: 100000,
    maxTotalLeadTimeMs: 1600000,
    avgTotalLeadTimeMs: 1600000,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The pull request internal ID                                                 | a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11                                         |
| `externalId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | The pull request number                                                      | 1234                                                                         |
| `title`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | The pull request title                                                       | Enable new payment structure                                                 |
| `status`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | The pull request status                                                      | merged                                                                       |
| `author`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | The pull request author                                                      | jane.doe                                                                     |
| `createTime`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `mergeTime`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `mergeCommitKey`                                                             | *string*                                                                     | :heavy_minus_sign:                                                           | The pull request merge commit key                                            | a90a8a2                                                                      |
| `baseCommitKey`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | The pull request base commit key                                             | a90a8a2                                                                      |
| `headCommitKey`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | The pull request head commit key                                             | a90a8a2                                                                      |
| `filesChanged`                                                               | *number*                                                                     | :heavy_check_mark:                                                           | The number of files changed                                                  | 2                                                                            |
| `linesAdded`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | The number of lines added                                                    | 100                                                                          |
| `linesDeleted`                                                               | *number*                                                                     | :heavy_check_mark:                                                           | The number of lines deleted                                                  | 50                                                                           |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | The pull request URL                                                         | https://github.com/launchdarkly/LaunchDarkly-Docs/pull/406                   |
| `deployments`                                                                | [models.DeploymentCollectionRep](../models/deploymentcollectionrep.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `flagReferences`                                                             | [models.FlagReferenceCollectionRep](../models/flagreferencecollectionrep.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `leadTime`                                                                   | [models.PullRequestLeadTimeRep](../models/pullrequestleadtimerep.md)         | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |