# StatementPost

## Example Usage

```typescript
import { StatementPost } from "@launchdarkly/mcp-server";

let value: StatementPost = {
  resources: [
    "proj/*:env/*:flag/*;testing-tag",
  ],
  actions: [
    "*",
  ],
  effect: "allow",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `resources`                                                                                                              | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | Resource specifier strings                                                                                               | [<br/>"proj/*:env/*:flag/*;testing-tag"<br/>]                                                                            |
| `notResources`                                                                                                           | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | Targeted resources are the resources NOT in this list. The <code>resources</code> field must be empty to use this field. |                                                                                                                          |
| `actions`                                                                                                                | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | Actions to perform on a resource                                                                                         | [<br/>"*"<br/>]                                                                                                          |
| `notActions`                                                                                                             | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | Targeted actions are the actions NOT in this list. The <code>actions</code> field must be empty to use this field.       |                                                                                                                          |
| `effect`                                                                                                                 | [models.StatementPostEffect](../models/statementposteffect.md)                                                           | :heavy_check_mark:                                                                                                       | Whether this statement should allow or deny actions on the resources.                                                    | allow                                                                                                                    |