# Phase

## Example Usage

```typescript
import { Phase } from "@launchdarkly/mcp-server";

let value: Phase = {
  id: "1234a56b7c89d012345e678f",
  audiences: [
    {
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
  name: "Phase 1 - Testing",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The phase ID                                                 | 1234a56b7c89d012345e678f                                     |
| `audiences`                                                  | [models.Audience](../models/audience.md)[]                   | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | The release phase name                                       | Phase 1 - Testing                                            |
| `configuration`                                              | [models.PhaseConfiguration](../models/phaseconfiguration.md) | :heavy_minus_sign:                                           | N/A                                                          |                                                              |