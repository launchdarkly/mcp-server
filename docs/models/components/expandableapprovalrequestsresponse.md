# ExpandableApprovalRequestsResponse

## Example Usage

```typescript
import { ExpandableApprovalRequestsResponse } from "@launchdarkly/mcp-server/models/components";

let value: ExpandableApprovalRequestsResponse = {
  items: [
    {
      id: "12ab3c45de678910abc12345",
      version: 1,
      creationDate: 566864,
      serviceKind: "<value>",
      requestorId: "12ab3c45de678910abc12345",
      description: "example: request approval from someone",
      reviewStatus: "pending",
      allReviews: [
        {
          id: "12ab3c45de678910abc12345",
          kind: "approve",
          comment: "Approved!",
          memberId: "12ab3c45de678910abc12345",
          serviceTokenId: "12ab3c45de678910abc12345",
        },
      ],
      notifyMemberIds: [
        "1234a56b7c89d012345e678f",
      ],
      appliedByMemberId: "1234a56b7c89d012345e678f",
      appliedByServiceTokenId: "1234a56b7c89d012345e678f",
      status: "pending",
      instructions: [
        {
          "key": "<value>",
        },
      ],
      conflicts: [
        {},
      ],
      links: {
        "key": "<value>",
      },
      operatingOnId: "12ab3c45de678910abc12345",
      source: {
        key: "source-flag-key-123abc",
        version: 1,
      },
      customWorkflowMetadata: {
        name: "Example workflow name",
        stage: {
          index: 0,
          name: "Stage 1",
        },
      },
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
      project: {
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
                  href:
                    "/api/v2/projects/my-project/environments/my-environment",
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
              serviceKindConfigurationId:
                "1ef45a85-218f-4428-a8b2-a97e5f56c258",
            },
          },
          critical: true,
        },
      ],
      flag: {
        name: "My Flag",
        kind: "boolean",
        description: "This flag controls the example widgets",
        key: "flag-key-123abc",
        version: 1,
        creationDate: 423631,
        variations: [
          {
            id: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
            value: true,
          },
          {
            id: "a00bf58d-d252-476c-b915-15a74becacb4",
            value: false,
          },
        ],
        temporary: true,
        tags: [
          "example-tag",
        ],
        links: {
          "parent": {
            href: "/api/v2/flags/my-project",
            type: "application/json",
          },
          "self": {
            href: "/api/v2/flags/my-project/my-flag",
            type: "application/json",
          },
        },
        maintainerId: "569f183514f4432160000007",
        maintainer: {
          links: {
            "self": {
              href: "/api/v2/members/569f183514f4432160000007",
              type: "application/json",
            },
          },
          id: "569f183514f4432160000007",
          firstName: "Ariel",
          lastName: "Flores",
          role: "admin",
          email: "ariel@acme.com",
        },
        customProperties: {
          "key": {
            name: "Jira issues",
            value: [
              "is-123",
              "is-456",
            ],
          },
        },
        archived: false,
        defaults: {
          onVariation: 0,
          offVariation: 1,
        },
      },
      resource: {
        kind: "flag",
        flag: {
          name: "My Flag",
          kind: "boolean",
          description: "This flag controls the example widgets",
          key: "flag-key-123abc",
          version: 1,
          creationDate: 861960,
          variations: [
            {
              id: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
              value: true,
            },
            {
              id: "a00bf58d-d252-476c-b915-15a74becacb4",
              value: false,
            },
          ],
          temporary: true,
          tags: [
            "example-tag",
          ],
          links: {
            "parent": {
              href: "/api/v2/flags/my-project",
              type: "application/json",
            },
            "self": {
              href: "/api/v2/flags/my-project/my-flag",
              type: "application/json",
            },
          },
          maintainerId: "569f183514f4432160000007",
          maintainer: {
            links: {
              "self": {
                href: "/api/v2/members/569f183514f4432160000007",
                type: "application/json",
              },
            },
            id: "569f183514f4432160000007",
            firstName: "Ariel",
            lastName: "Flores",
            role: "admin",
            email: "ariel@acme.com",
          },
          customProperties: {
            "key": {
              name: "Jira issues",
              value: [
                "is-123",
                "is-456",
              ],
            },
          },
          archived: false,
          defaults: {
            onVariation: 0,
            offVariation: 1,
          },
        },
        segment: {
          name: "Example segment",
          description: "Bundle our sample customers together",
          tags: [
            "testing",
          ],
          creationDate: 3317,
          lastModifiedDate: 127913,
          key: "segment-key-123abc",
          included: [
            "user-key-123abc",
          ],
          excluded: [
            "user-key-123abc",
          ],
          links: {
            "key": {},
          },
          rules: [
            {
              id: "1234a56b7c89d012345e678f",
              clauses: [
                {
                  id: "12ab3c45de678910fab12345",
                  attribute: "email",
                  op: "endsWith",
                  values: [
                    ".edu",
                  ],
                  negate: false,
                },
              ],
            },
          ],
          version: 1,
          deleted: false,
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
          flags: [
            {
              name: "Example flag",
              key: "flag-key-123abc",
            },
          ],
          unbounded: false,
          generation: 4071,
          external: "amplitude",
          externalLink:
            "https://analytics.amplitude.com/org/1234/cohort/123abc",
          importInProgress: false,
        },
        aiConfig: {
          key: "aiconfig-key-123abc",
          name: "AI Config 1",
        },
      },
    },
  ],
  totalCount: 1,
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                        | [components.ExpandableApprovalRequestResponse](../../models/components/expandableapprovalrequestresponse.md)[] | :heavy_check_mark:                                                                                             | An array of approval requests                                                                                  |                                                                                                                |
| `totalCount`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Total number of approval requests                                                                              | 1                                                                                                              |
| `links`                                                                                                        | Record<string, [components.Link](../../models/components/link.md)>                                             | :heavy_check_mark:                                                                                             | The location and content type of related resources                                                             |                                                                                                                |