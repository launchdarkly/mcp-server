# CustomRolePost

## Example Usage

```typescript
import { CustomRolePost } from "@launchdarkly/mcp-server/models/components";

let value: CustomRolePost = {
  name: "Ops team",
  key: "role-key-123abc",
  description: "An example role for members of the ops team",
  policy: [
    {
      resources: [
        "proj/*:env/*:flag/*;testing-tag",
      ],
      actions: [
        "*",
      ],
      effect: "allow",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | A human-friendly name for the custom role                              | Ops team                                                               |
| `key`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | The custom role key                                                    | role-key-123abc                                                        |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Description of custom role                                             | An example role for members of the ops team                            |
| `policy`                                                               | [components.StatementPost](../../models/components/statementpost.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `basePermissions`                                                      | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `resourceCategory`                                                     | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |