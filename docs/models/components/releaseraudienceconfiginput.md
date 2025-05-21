# ReleaserAudienceConfigInput

## Example Usage

```typescript
import { ReleaserAudienceConfigInput } from "@launchdarkly/mcp-server/models/components";

let value: ReleaserAudienceConfigInput = {
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `audienceId`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | UUID of the audience.                                                                                        |                                                                                                              |
| `releaseGuardianConfiguration`                                                                               | [components.ReleaseGuardianConfigurationInput](../../models/components/releaseguardianconfigurationinput.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `notifyMemberIds`                                                                                            | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | An array of member IDs. These members are notified to review the approval request.                           | [<br/>"1234a56b7c89d012345e678f"<br/>]                                                                       |
| `notifyTeamKeys`                                                                                             | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | An array of team keys. The members of these teams are notified to review the approval request.               | [<br/>"example-reviewer-team"<br/>]                                                                          |