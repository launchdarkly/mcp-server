# ParameterDefault

## Example Usage

```typescript
import { ParameterDefault } from "@launchdarkly/mcp-server/models/components";

let value: ParameterDefault = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `value`                                                                  | *any*                                                                    | :heavy_minus_sign:                                                       | The default value for the given parameter                                |
| `booleanVariationValue`                                                  | *boolean*                                                                | :heavy_minus_sign:                                                       | Variation value for boolean flags. Not applicable for non-boolean flags. |
| `ruleClause`                                                             | [components.RuleClause](../../models/components/ruleclause.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |