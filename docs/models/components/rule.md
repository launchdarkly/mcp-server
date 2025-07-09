# Rule

## Example Usage

```typescript
import { Rule } from "@launchdarkly/mcp-server/models/components";

let value: Rule = {
  clauses: [],
  trackEvents: true,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | The flag rule ID                                                       |
| `variation`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | The index of the variation, from the array of variations for this flag |
| `rollout`                                                              | [components.Rollout](../../models/components/rollout.md)               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `clauses`                                                              | [components.Clause](../../models/components/clause.md)[]               | :heavy_check_mark:                                                     | An array of clauses used for individual targeting based on attributes  |
| `trackEvents`                                                          | *boolean*                                                              | :heavy_check_mark:                                                     | Whether LaunchDarkly tracks events for this rule                       |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | The rule description                                                   |
| `ref`                                                                  | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |