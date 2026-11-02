# AIConfigTargetingEnvironmentRuleClause

## Example Usage

```typescript
import { AIConfigTargetingEnvironmentRuleClause } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingEnvironmentRuleClause = {
  attribute: "attribute",
  id: "id",
  negate: true,
  op: "op",
  values: [
    "",
    "",
  ],
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `attribute`                    | *string*                       | :heavy_check_mark:             | The context attribute to match |
| `id`                           | *string*                       | :heavy_check_mark:             | The clause ID                  |
| `negate`                       | *boolean*                      | :heavy_check_mark:             | Whether to negate the match    |
| `op`                           | *string*                       | :heavy_check_mark:             | The operator to use            |
| `values`                       | *any*[]                        | :heavy_check_mark:             | The values to match against    |