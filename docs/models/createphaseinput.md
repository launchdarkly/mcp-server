# CreatePhaseInput

## Example Usage

```typescript
import { CreatePhaseInput } from "@launchdarkly/mcp-server";

let value: CreatePhaseInput = {
  audiences: [
    {
      environmentKey: "<value>",
      name: "<value>",
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
    },
  ],
  name: "Phase 1 - Testing",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `audiences`                                                                                                       | [models.AudiencePost](../models/audiencepost.md)[]                                                                | :heavy_check_mark:                                                                                                | An ordered list of the audiences for this release phase. Each audience corresponds to a LaunchDarkly environment. |                                                                                                                   |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The release phase name                                                                                            | Phase 1 - Testing                                                                                                 |
| `configuration`                                                                                                   | [models.PhaseConfiguration](../models/phaseconfiguration.md)                                                      | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |