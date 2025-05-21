# UpdatePhaseStatusRequest

## Example Usage

```typescript
import { UpdatePhaseStatusRequest } from "@launchdarkly/mcp-server/models/operations";

let value: UpdatePhaseStatusRequest = {
  projectKey: "<value>",
  flagKey: "<value>",
  phaseId: "<value>",
  updatePhaseStatusInput: {
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
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `projectKey`                                                            | *string*                                                                | :heavy_check_mark:                                                      | The project key                                                         |
| `flagKey`                                                               | *string*                                                                | :heavy_check_mark:                                                      | The flag key                                                            |
| `phaseId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | The phase ID                                                            |
| `updatePhaseStatusInput`                                                | [models.UpdatePhaseStatusInput](../../models/updatephasestatusinput.md) | :heavy_check_mark:                                                      | N/A                                                                     |