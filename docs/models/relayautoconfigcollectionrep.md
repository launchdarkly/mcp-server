# RelayAutoConfigCollectionRep

## Example Usage

```typescript
import { RelayAutoConfigCollectionRep } from "@launchdarkly/mcp-server";

let value: RelayAutoConfigCollectionRep = {
  items: [
    {
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
      creationDate: 908384,
      lastModified: 249884,
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [models.RelayAutoConfigRep](../models/relayautoconfigrep.md)[] | :heavy_check_mark:                                             | An array of Relay Proxy configurations                         |