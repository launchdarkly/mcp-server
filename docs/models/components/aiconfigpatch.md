# AIConfigPatch

## Example Usage

```typescript
import { AIConfigPatch } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigPatch = {
  defaultVariationKey: "defaultVariationKey",
  description: "description",
  maintainerId: "507f1f77bcf86cd799439011",
  maintainerTeamKey: "example-team-key",
  name: "name",
  tags: [
    "tags",
    "tags",
  ],
  evaluationMetricKey: "evaluationMetricKey",
  isInverted: true,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `defaultVariationKey`                                                                     | *string*                                                                                  | :heavy_minus_sign:                                                                        | Key of the variation this config serves by default                                        |                                                                                           |
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | A description of the AI Config                                                            |                                                                                           |
| `maintainerId`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | The ID of the member who maintains this resource                                          | 507f1f77bcf86cd799439011                                                                  |
| `maintainerTeamKey`                                                                       | *string*                                                                                  | :heavy_minus_sign:                                                                        | The key of the team that maintains this resource                                          | example-team-key                                                                          |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | A human-readable name for the AI Config                                                   |                                                                                           |
| `tags`                                                                                    | *string*[]                                                                                | :heavy_minus_sign:                                                                        | Tags for this resource                                                                    |                                                                                           |
| `evaluationMetricKey`                                                                     | *string*                                                                                  | :heavy_minus_sign:                                                                        | Evaluation metric key for this config                                                     |                                                                                           |
| `isInverted`                                                                              | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Whether the evaluation metric is inverted, meaning a lower value is better if set as true |                                                                                           |