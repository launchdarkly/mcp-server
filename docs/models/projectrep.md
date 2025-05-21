# ProjectRep

## Example Usage

```typescript
import { ProjectRep } from "@launchdarkly/mcp-server";

let value: ProjectRep = {
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
  environments: [
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

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           | Example                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                               | Record<string, [models.Link](../models/link.md)>                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                    | The location and content type of related resources                                                                                                                                    | {<br/>"environments": {<br/>"href": "/api/v2/projects/my-project/environments",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/projects/my-project",<br/>"type": "application/json"<br/>}<br/>} |
| `id`                                                                                                                                                                                  | *string*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                    | The ID of this project                                                                                                                                                                | 57be1db38b75bf0772d11383                                                                                                                                                              |
| `key`                                                                                                                                                                                 | *string*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                    | The key of this project                                                                                                                                                               | project-key-123abc                                                                                                                                                                    |
| `includeInSnippetByDefault`                                                                                                                                                           | *boolean*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                    | Whether or not flags created in this project are made available to the client-side JavaScript SDK by default                                                                          | true                                                                                                                                                                                  |
| `defaultClientSideAvailability`                                                                                                                                                       | [models.ClientSideAvailability](../models/clientsideavailability.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                    | N/A                                                                                                                                                                                   |                                                                                                                                                                                       |
| `name`                                                                                                                                                                                | *string*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                    | A human-friendly name for the project                                                                                                                                                 | My Project                                                                                                                                                                            |
| `access`                                                                                                                                                                              | [models.Access](../models/access.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                    | N/A                                                                                                                                                                                   |                                                                                                                                                                                       |
| `tags`                                                                                                                                                                                | *string*[]                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                    | A list of tags for the project                                                                                                                                                        | [<br/>"ops"<br/>]                                                                                                                                                                     |
| `defaultReleasePipelineKey`                                                                                                                                                           | *string*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                    | The key of the default release pipeline for this project                                                                                                                              |                                                                                                                                                                                       |
| `environments`                                                                                                                                                                        | [models.Environment](../models/environment.md)[]                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                    | A list of environments for the project                                                                                                                                                |                                                                                                                                                                                       |