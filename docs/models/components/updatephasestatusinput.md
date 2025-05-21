# UpdatePhaseStatusInput

## Example Usage

```typescript
import { UpdatePhaseStatusInput } from "@launchdarkly/mcp-server/models/components";

let value: UpdatePhaseStatusInput = {
  audiences: [
    {
      releaseGuardianConfiguration: {
        monitoringWindowMilliseconds: 60000,
        rolloutWeight: 50,
        rollbackOnRegression: true,
        randomizationUnit: "user",
      },
      notifyMemberIds: [
        "1234a56b7c89d012345e678f",
      ],
      notifyTeamKeys: [
        "example-reviewer-team",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `status`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `audiences`                                                                                        | [components.ReleaserAudienceConfigInput](../../models/components/releaseraudienceconfiginput.md)[] | :heavy_minus_sign:                                                                                 | Extra configuration for audiences required upon phase initialization.                              |