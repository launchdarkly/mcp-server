# AudienceConfiguration

## Example Usage

```typescript
import { AudienceConfiguration } from "@launchdarkly/mcp-server";

let value: AudienceConfiguration = {
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `releaseStrategy`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `requireApproval`                                                                              | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Whether or not the audience requires approval                                                  | true                                                                                           |
| `notifyMemberIds`                                                                              | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | An array of member IDs. These members are notified to review the approval request.             | [<br/>"1234a56b7c89d012345e678f"<br/>]                                                         |
| `notifyTeamKeys`                                                                               | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | An array of team keys. The members of these teams are notified to review the approval request. | [<br/>"example-reviewer-team"<br/>]                                                            |
| `releaseGuardianConfiguration`                                                                 | [models.ReleaseGuardianConfiguration](../models/releaseguardianconfiguration.md)               | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |