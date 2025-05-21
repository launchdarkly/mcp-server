# Release

## Example Usage

```typescript
import { Release } from "@launchdarkly/mcp-server/models/components";

let value: Release = {
  name: "Example release pipeline",
  releasePipelineKey: "example-release-pipeline",
  releasePipelineDescription:
    "Our release pipeline for typical testing and deployment",
  phases: [
    {
      id: "1234a56b7c89d012345e678f",
      name: "Phase 1 - Testing",
      complete: true,
      creationDate: 219627,
      completedBy: {
        member: {
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
        token: {
          name: "DevOps token",
          ending: "2345",
          serviceToken: false,
        },
      },
      audiences: [
        {
          id: "1234a56b7c89d012345e678g",
          environment: {
            links: {
              "self": {
                href: "/api/v2/projects/my-project/environments/my-environment",
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
    },
  ],
  version: 1,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `links`                                                               | Record<string, [components.Link](../../models/components/link.md)>    | :heavy_minus_sign:                                                    | The location and content type of related resources                    |                                                                       |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The release pipeline name                                             | Example release pipeline                                              |
| `releasePipelineKey`                                                  | *string*                                                              | :heavy_check_mark:                                                    | The release pipeline key                                              | example-release-pipeline                                              |
| `releasePipelineDescription`                                          | *string*                                                              | :heavy_check_mark:                                                    | The release pipeline description                                      | Our release pipeline for typical testing and deployment               |
| `phases`                                                              | [components.ReleasePhase](../../models/components/releasephase.md)[]  | :heavy_check_mark:                                                    | An ordered list of the release pipeline phases                        |                                                                       |
| `version`                                                             | *number*                                                              | :heavy_check_mark:                                                    | The release version                                                   | 1                                                                     |
| `releaseVariationId`                                                  | *string*                                                              | :heavy_minus_sign:                                                    | The chosen release variation ID to use across all phases of a release |                                                                       |
| `canceledAt`                                                          | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |