# ReleasePhase

## Example Usage

```typescript
import { ReleasePhase } from "@launchdarkly/mcp-server/models/components";

let value: ReleasePhase = {
  id: "1234a56b7c89d012345e678f",
  name: "Phase 1 - Testing",
  complete: true,
  creationDate: 14695,
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | The phase ID                                                                                 | 1234a56b7c89d012345e678f                                                                     |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The release phase name                                                                       | Phase 1 - Testing                                                                            |
| `complete`                                                                                   | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Whether this phase is complete                                                               | true                                                                                         |
| `creationDate`                                                                               | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `completionDate`                                                                             | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `completedBy`                                                                                | [components.CompletedBy](../../models/components/completedby.md)                             | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `audiences`                                                                                  | [components.ReleaseAudience](../../models/components/releaseaudience.md)[]                   | :heavy_check_mark:                                                                           | A logical grouping of one or more environments that share attributes for rolling out changes |                                                                                              |
| `status`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `started`                                                                                    | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Whether or not this phase has started                                                        |                                                                                              |
| `startedDate`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `configuration`                                                                              | [components.PhaseConfiguration](../../models/components/phaseconfiguration.md)               | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |