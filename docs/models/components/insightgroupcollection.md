# InsightGroupCollection

## Example Usage

```typescript
import { InsightGroupCollection } from "@launchdarkly/mcp-server/models/components";

let value: InsightGroupCollection = {
  totalCount: 15,
  items: [
    {
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
      createdAt: 8664,
    },
  ],
  metadata: {
    countByIndicator: {
      excellent: 1,
      good: 1,
      fair: 1,
      needsAttention: 1,
      notCalculated: 1,
      unknown: 1,
      total: 6,
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The total number of insight groups                                                                               | 15                                                                                                               |
| `items`                                                                                                          | [components.InsightGroup](../../models/components/insightgroup.md)[]                                             | :heavy_check_mark:                                                                                               | A list of insight groups                                                                                         |                                                                                                                  |
| `links`                                                                                                          | Record<string, [components.Link](../../models/components/link.md)>                                               | :heavy_minus_sign:                                                                                               | The location and content type of related resources                                                               |                                                                                                                  |
| `metadata`                                                                                                       | [components.InsightGroupCollectionMetadata](../../models/components/insightgroupcollectionmetadata.md)           | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `scoreMetadata`                                                                                                  | [components.InsightGroupCollectionScoreMetadata](../../models/components/insightgroupcollectionscoremetadata.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |