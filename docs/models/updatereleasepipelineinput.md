# UpdateReleasePipelineInput

## Example Usage

```typescript
import { UpdateReleasePipelineInput } from "@launchdarkly/mcp-server";

let value: UpdateReleasePipelineInput = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The release pipeline description                                                             | Standard pipeline to roll out to production                                                  |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The name of the release pipeline                                                             | Standard Pipeline                                                                            |
| `phases`                                                                                     | [models.CreatePhaseInput](../models/createphaseinput.md)[]                                   | :heavy_check_mark:                                                                           | A logical grouping of one or more environments that share attributes for rolling out changes |                                                                                              |
| `tags`                                                                                       | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | A list of tags for this release pipeline                                                     | [<br/>"example-tag"<br/>]                                                                    |