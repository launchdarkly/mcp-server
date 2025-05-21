# CustomRoles

## Example Usage

```typescript
import { CustomRoles } from "@launchdarkly/mcp-server/models/components";

let value: CustomRoles = {
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_minus_sign:                                                 | The location and content type of related resources                 |
| `items`                                                            | [components.CustomRole](../../models/components/customrole.md)[]   | :heavy_check_mark:                                                 | An array of custom roles                                           |
| `totalCount`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | The total number of custom roles                                   |