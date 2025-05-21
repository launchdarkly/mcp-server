# ReleasePipeline

## Example Usage

```typescript
import { ReleasePipeline } from "@launchdarkly/mcp-server/models/components";

let value: ReleasePipeline = {
  createdAt: new Date("1684262711507"),
  description: "Standard pipeline to roll out to production",
  key: "standard-pipeline",
  name: "Standard Pipeline",
  phases: [
    {
      id: "1234a56b7c89d012345e678f",
      audiences: [
        {
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
        },
      ],
      name: "Phase 1 - Testing",
    },
  ],
  tags: [
    "example-tag",
  ],
  version: 1,
  access: {
    denied: [
      {
        action: "<value>",
        reason: {
          resources: [
            "proj/*:env/*;qa_*:/flag/*",
          ],
          actions: [
            "*",
          ],
          effect: "allow",
        },
      },
    ],
    allowed: [
      {
        action: "<value>",
        reason: {
          resources: [
            "proj/*:env/*;qa_*:/flag/*",
          ],
          actions: [
            "*",
          ],
          effect: "allow",
        },
      },
    ],
  },
  isLegacy: true,
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | Timestamp of when the release pipeline was created                                                                                                          | 1684262711507                                                                                                                                               |
| `description`                                                                                                                                               | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | The release pipeline description                                                                                                                            | Standard pipeline to roll out to production                                                                                                                 |
| `key`                                                                                                                                                       | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The release pipeline key                                                                                                                                    | standard-pipeline                                                                                                                                           |
| `name`                                                                                                                                                      | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The release pipeline name                                                                                                                                   | Standard Pipeline                                                                                                                                           |
| `phases`                                                                                                                                                    | [components.Phase](../../models/components/phase.md)[]                                                                                                      | :heavy_check_mark:                                                                                                                                          | An ordered list of the release pipeline phases. Each phase is a logical grouping of one or more environments that share attributes for rolling out changes. |                                                                                                                                                             |
| `tags`                                                                                                                                                      | *string*[]                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                          | A list of the release pipeline's tags                                                                                                                       | [<br/>"example-tag"<br/>]                                                                                                                                   |
| `version`                                                                                                                                                   | *number*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | The release pipeline version                                                                                                                                | 1                                                                                                                                                           |
| `access`                                                                                                                                                    | [components.Access](../../models/components/access.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |                                                                                                                                                             |
| `isProjectDefault`                                                                                                                                          | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | Whether this release pipeline is the default pipeline for the project                                                                                       |                                                                                                                                                             |
| `isLegacy`                                                                                                                                                  | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | Whether this release pipeline is a legacy pipeline                                                                                                          | true                                                                                                                                                        |