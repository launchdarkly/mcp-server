# ReleaseAudience

## Example Usage

```typescript
import { ReleaseAudience } from "@launchdarkly/mcp-server/models/components";

let value: ReleaseAudience = {
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The audience ID                                                                      | 1234a56b7c89d012345e678g                                                             |
| `links`                                                                              | Record<string, [components.Link](../../models/components/link.md)>                   | :heavy_minus_sign:                                                                   | The location and content type of related resources                                   |                                                                                      |
| `environment`                                                                        | [components.EnvironmentSummary](../../models/components/environmentsummary.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The release phase name                                                               | Phase 1 - Testing                                                                    |
| `configuration`                                                                      | [components.AudienceConfiguration](../../models/components/audienceconfiguration.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `segmentKeys`                                                                        | *string*[]                                                                           | :heavy_minus_sign:                                                                   | A list of segment keys                                                               | [<br/>"segment-key-123abc"<br/>]                                                     |
| `status`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `ruleIds`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | The rules IDs added or updated by this audience                                      |                                                                                      |