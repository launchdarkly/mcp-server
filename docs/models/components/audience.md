# Audience

## Example Usage

```typescript
import { Audience } from "@launchdarkly/mcp-server/models/components";

let value: Audience = {
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
| `environment`                                                                        | [components.EnvironmentSummary](../../models/components/environmentsummary.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The release phase name                                                               | Phase 1 - Testing                                                                    |
| `configuration`                                                                      | [components.AudienceConfiguration](../../models/components/audienceconfiguration.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `segmentKeys`                                                                        | *string*[]                                                                           | :heavy_minus_sign:                                                                   | A list of segment keys                                                               | [<br/>"segment-key-123abc"<br/>]                                                     |