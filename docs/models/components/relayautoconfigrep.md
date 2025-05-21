# RelayAutoConfigRep

## Example Usage

```typescript
import { RelayAutoConfigRep } from "@launchdarkly/mcp-server/models/components";

let value: RelayAutoConfigRep = {
  id: "<id>",
  creator: {
    links: {
      "self": {
        href: "/api/v2/members/569f183514f4432160000007",
        type: "application/json",
      },
    },
    id: "569f183514f4432160000007",
    firstName: "Ariel",
    lastName: "Flores",
    role: "admin",
    email: "ariel@acme.com",
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
  name: "Relay Proxy Demo Config",
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
  fullKey: "<value>",
  displayKey: "7f30",
  creationDate: 578890,
  lastModified: 797815,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `creator`                                                                                      | [components.MemberSummary](../../models/components/membersummary.md)                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `access`                                                                                       | [components.Access](../../models/components/access.md)                                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | A human-friendly name for the Relay Proxy configuration                                        | Relay Proxy Demo Config                                                                        |
| `policy`                                                                                       | [components.Statement](../../models/components/statement.md)[]                                 | :heavy_check_mark:                                                                             | A description of what environments and projects the Relay Proxy should include or exclude      |                                                                                                |
| `fullKey`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The Relay Proxy configuration key                                                              |                                                                                                |
| `displayKey`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The last few characters of the Relay Proxy configuration key, displayed in the LaunchDarkly UI | 7f30                                                                                           |
| `creationDate`                                                                                 | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `lastModified`                                                                                 | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |