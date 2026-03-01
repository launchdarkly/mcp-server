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

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `attribute`        | *string*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `negate`           | *boolean*          | :heavy_check_mark: | N/A                |
| `op`               | *string*           | :heavy_check_mark: | N/A                |
| `values`           | *any*[]            | :heavy_check_mark: | N/A                |