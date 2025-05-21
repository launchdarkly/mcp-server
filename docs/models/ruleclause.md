# RuleClause

## Example Usage

```typescript
import { RuleClause } from "@launchdarkly/mcp-server";

let value: RuleClause = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `attribute`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | The attribute the rule applies to, for example, last name or email address |
| `op`                                                                       | [models.Op](../models/op.md)                                               | :heavy_minus_sign:                                                         | The operator to apply to the given attribute                               |
| `negate`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the operator should be negated                                     |