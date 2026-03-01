# AIConfigPatch

## Example Usage

```typescript
import { AIConfigPatch } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigPatch = {
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
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `maintainerId`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 507f1f77bcf86cd799439011                                                                  |
| `maintainerTeamKey`                                                                       | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | example-team-key                                                                          |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `tags`                                                                                    | *string*[]                                                                                | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `evaluationMetricKey`                                                                     | *string*                                                                                  | :heavy_minus_sign:                                                                        | Evaluation metric key for this AI Config                                                  |                                                                                           |
| `isInverted`                                                                              | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Whether the evaluation metric is inverted, meaning a lower value is better if set as true |                                                                                           |