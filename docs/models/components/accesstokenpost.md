# AccessTokenPost

## Example Usage

```typescript
import { AccessTokenPost } from "@launchdarkly/mcp-server/models/components";

let value: AccessTokenPost = {
  inlineRole: [
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                       | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | A human-friendly name for the access token                                                                                                                   |
| `description`                                                                                                                                                | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | A description for the access token                                                                                                                           |
| `role`                                                                                                                                                       | [components.AccessTokenPostRole](../../models/components/accesstokenpostrole.md)                                                                             | :heavy_minus_sign:                                                                                                                                           | Built-in role for the token                                                                                                                                  |
| `customRoleIds`                                                                                                                                              | *string*[]                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                           | A list of custom role IDs to use as access limits for the access token                                                                                       |
| `inlineRole`                                                                                                                                                 | [components.StatementPost](../../models/components/statementpost.md)[]                                                                                       | :heavy_minus_sign:                                                                                                                                           | A JSON array of statements represented as JSON objects with three attributes: effect, resources, actions. May be used in place of a built-in or custom role. |
| `serviceToken`                                                                                                                                               | *boolean*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                           | Whether the token is a service token                                                                                                                         |
| `defaultApiVersion`                                                                                                                                          | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | The default API version for this token                                                                                                                       |