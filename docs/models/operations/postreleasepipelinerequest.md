# PostReleasePipelineRequest

## Example Usage

```typescript
import { PostReleasePipelineRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostReleasePipelineRequest = {
  projectKey: "<value>",
  createReleasePipelineInput: {
    description: "Standard pipeline to roll out to production",
    key: "standard-pipeline",
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
| `createReleasePipelineInput`                                                                   | [components.CreateReleasePipelineInput](../../models/components/createreleasepipelineinput.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |