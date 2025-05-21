# PutReleasePipelineRequest

## Example Usage

```typescript
import { PutReleasePipelineRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PutReleasePipelineRequest = {
  projectKey: "<value>",
  pipelineKey: "<value>",
  updateReleasePipelineInput: {
    description: "Standard pipeline to roll out to production",
    name: "Standard Pipeline",
    phases: [
      {
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
      },
    ],
    tags: [
      "example-tag",
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The project key                                                                                |
| `pipelineKey`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The release pipeline key                                                                       |
| `updateReleasePipelineInput`                                                                   | [components.UpdateReleasePipelineInput](../../models/components/updatereleasepipelineinput.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |