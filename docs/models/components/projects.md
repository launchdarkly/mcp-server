# Projects

## Example Usage

```typescript
import { Projects } from "@launchdarkly/mcp-server/models/components";

let value: Projects = {
  links: {
    "self": {
      href: "/api/v2/projects",
      type: "application/json",
    },
  },
  items: [
    {
      links: {
        "environments": {
          href: "/api/v2/projects/my-project/environments",
          type: "application/json",
        },
        "self": {
          href: "/api/v2/projects/my-project",
          type: "application/json",
        },
      },
      id: "57be1db38b75bf0772d11383",
      key: "project-key-123abc",
      includeInSnippetByDefault: true,
      name: "My Project",
      access: {
        denied: [
          {
            action: "<value>",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              actions: [
                "*",
              ],
              effect: "allow",
            },
          },
        ],
        allowed: [
          {
            action: "<value>",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              actions: [
                "*",
              ],
              effect: "allow",
            },
          },
        ],
      },
      tags: [
        "ops",
      ],
      environments: {
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
              serviceKindConfigurationId:
                "1ef45a85-218f-4428-a8b2-a97e5f56c258",
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
                serviceKindConfigurationId:
                  "1ef45a85-218f-4428-a8b2-a97e5f56c258",
              },
            },
            critical: true,
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `links`                                                                | Record<string, [components.Link](../../models/components/link.md)>     | :heavy_check_mark:                                                     | A link to this resource.                                               | {<br/>"self": {<br/>"href": "/api/v2/projects",<br/>"type": "application/json"<br/>}<br/>} |
| `items`                                                                | [components.Project](../../models/components/project.md)[]             | :heavy_check_mark:                                                     | List of projects.                                                      |                                                                        |
| `totalCount`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |