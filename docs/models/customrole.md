# CustomRole

## Example Usage

```typescript
import { CustomRole } from "@launchdarkly/mcp-server";

let value: CustomRole = {
  id: "1234a56b7c89d012345e678f",
  links: {
    "key": {},
  },
  access: {
    denied: [
      {
        action: "<value>",
        reason: {
          resources: [
            "proj/*:env/*;qa_*:/flag/*",
          ],
          actions: [
            "*",
          ],
          effect: "allow",
        },
      },
    ],
    allowed: [
      {
        action: "<value>",
        reason: {
          resources: [
            "proj/*:env/*;qa_*:/flag/*",
          ],
          actions: [
            "*",
          ],
          effect: "allow",
        },
      },
    ],
  },
  description: "This custom role is just an example",
  key: "example-custom-role",
  name: "Example custom role",
  policy: [
    {
      resources: [
        "proj/*:env/*;qa_*:/flag/*",
      ],
      actions: [
        "*",
      ],
      effect: "allow",
    },
  ],
  presetStatements: [
    {
      resources: [
        "proj/*:env/*;qa_*:/flag/*",
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the custom role                                                 | 1234a56b7c89d012345e678f                                                  |
| `links`                                                                   | Record<string, [models.Link](../models/link.md)>                          | :heavy_check_mark:                                                        | The location and content type of related resources                        |                                                                           |
| `access`                                                                  | [models.Access](../models/access.md)                                      | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `description`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | The description of the custom role                                        | This custom role is just an example                                       |
| `key`                                                                     | *string*                                                                  | :heavy_check_mark:                                                        | The key of the custom role                                                | example-custom-role                                                       |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | The name of the custom role                                               | Example custom role                                                       |
| `policy`                                                                  | [models.Statement](../models/statement.md)[]                              | :heavy_check_mark:                                                        | An array of the policies that comprise this custom role                   |                                                                           |
| `basePermissions`                                                         | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `resourceCategory`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `assignedTo`                                                              | [models.AssignedToRep](../models/assignedtorep.md)                        | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `presetBundleVersion`                                                     | *number*                                                                  | :heavy_minus_sign:                                                        | If created from a preset, the preset bundle version                       |                                                                           |
| `presetStatements`                                                        | [models.Statement](../models/statement.md)[]                              | :heavy_minus_sign:                                                        | If created from a preset, the read-only statements copied from the preset |                                                                           |