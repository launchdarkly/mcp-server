# Environments

## Example Usage

```typescript
import { Environments } from "@launchdarkly/mcp-server";

let value: Environments = {
  totalCount: 2,
  items: [
    {
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
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `links`                                            | Record<string, [models.Link](../models/link.md)>   | :heavy_minus_sign:                                 | The location and content type of related resources |                                                    |
| `totalCount`                                       | *number*                                           | :heavy_minus_sign:                                 | The number of environments returned                | 2                                                  |
| `items`                                            | [models.Environment](../models/environment.md)[]   | :heavy_check_mark:                                 | An array of environments                           |                                                    |