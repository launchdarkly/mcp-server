# InsightGroup

## Example Usage

```typescript
import { InsightGroup } from "@launchdarkly/mcp-server/models/components";

let value: InsightGroup = {
  environment: {
    links: {
      "self": {
        href: "/api/v2/projects/my-project/environments/my-environment",
        type: "application/json",
      },
    },
    id: "57be1db38b75bf0772d11384",
    key: "environment-key-123abc",
    name: "My Environment",
    apiKey: "sdk-xxx",
    mobileKey: "mob-xxx",
    color: "F5A623",
    defaultTtl: 5,
    secureMode: true,
    defaultTrackEvents: false,
    requireComments: true,
    confirmChanges: true,
    tags: [
      "ops",
    ],
    approvalSettings: {
      required: true,
      bypassApprovalsForPendingChanges: false,
      minNumApprovals: 1,
      canReviewOwnRequest: false,
      canApplyDeclinedChanges: true,
      autoApplyApprovedChanges: true,
      serviceKind: "launchdarkly",
      serviceConfig: {},
      requiredApprovalTags: [
        "require-approval",
      ],
      serviceKindConfigurationId: "1ef45a85-218f-4428-a8b2-a97e5f56c258",
    },
    resourceApprovalSettings: {
      "key": {
        required: true,
        bypassApprovalsForPendingChanges: false,
        minNumApprovals: 1,
        canReviewOwnRequest: false,
        canApplyDeclinedChanges: true,
        autoApplyApprovedChanges: true,
        serviceKind: "launchdarkly",
        serviceConfig: {},
        requiredApprovalTags: [
          "require-approval",
        ],
        serviceKindConfigurationId: "1ef45a85-218f-4428-a8b2-a97e5f56c258",
      },
    },
    critical: true,
  },
  scores: {
    overall: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
      lastPeriod: {
        score: 100,
        aggregateOf: [
          "deploymentFrequency",
          "leadTime",
        ],
        indicator: "<value>",
        indicatorRange: {
          min: 0,
          max: 100,
        },
      },
    },
    deploymentFrequency: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
    deploymentFailureRate: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
    leadTime: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
    impactSize: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
    experimentationCoverage: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
    flagHealth: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
    velocity: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
    risk: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
    efficiency: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
    creationRatio: {
      score: 100,
      aggregateOf: [
        "deploymentFrequency",
        "leadTime",
      ],
      indicator: "<value>",
      indicatorRange: {
        min: 0,
        max: 100,
      },
    },
  },
  key: "default-production-all-apps",
  name: "Production - All Apps",
  projectKey: "default",
  environmentKey: "production",
  applicationKeys: [
    "billing-service",
    "inventory-service",
  ],
  createdAt: 266933,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `environment`                                                                                                    | [components.Environment](../../models/components/environment.md)                                                 | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `scores`                                                                                                         | [components.InsightGroupScores](../../models/components/insightgroupscores.md)                                   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `scoreMetadata`                                                                                                  | [components.InsightGroupCollectionScoreMetadata](../../models/components/insightgroupcollectionscoremetadata.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `key`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The insight group key                                                                                            | default-production-all-apps                                                                                      |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The insight group name                                                                                           | Production - All Apps                                                                                            |
| `projectKey`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The project key                                                                                                  | default                                                                                                          |
| `environmentKey`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The environment key                                                                                              | production                                                                                                       |
| `applicationKeys`                                                                                                | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | The application keys                                                                                             | [<br/>"billing-service",<br/>"inventory-service"<br/>]                                                           |
| `createdAt`                                                                                                      | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |