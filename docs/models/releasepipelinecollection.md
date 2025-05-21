# ReleasePipelineCollection

## Example Usage

```typescript
import { ReleasePipelineCollection } from "@launchdarkly/mcp-server";

let value: ReleasePipelineCollection = {
  items: [
    {
      createdAt: new Date("1684262711507"),
      description: "Standard pipeline to roll out to production",
      key: "standard-pipeline",
      name: "Standard Pipeline",
      phases: [
        {
          id: "1234a56b7c89d012345e678f",
          audiences: [
            {
              environment: {
                links: {
                  "self": {
                    href:
                      "/api/v2/projects/my-project/environments/my-environment",
                    type: "application/json",
                  },
                },
                key: "environment-key-123abc",
                name: "My Environment",
                color: "F5A623",
              },
              name: "Phase 1 - Testing",
              configuration: {
                releaseStrategy: "<value>",
                requireApproval: true,
                notifyMemberIds: [
                  "1234a56b7c89d012345e678f",
                ],
                notifyTeamKeys: [
                  "example-reviewer-team",
                ],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rolloutWeight: 50,
                  rollbackOnRegression: true,
                  randomizationUnit: "user",
                },
              },
              segmentKeys: [
                "segment-key-123abc",
              ],
            },
          ],
          name: "Phase 1 - Testing",
        },
      ],
      tags: [
        "example-tag",
      ],
      version: 1,
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
      isLegacy: true,
    },
  ],
  totalCount: 1,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [models.ReleasePipeline](../models/releasepipeline.md)[] | :heavy_check_mark:                                       | An array of release pipelines                            |                                                          |
| `totalCount`                                             | *number*                                                 | :heavy_check_mark:                                       | Total number of release pipelines                        | 1                                                        |