# TriggerWorkflowCollectionRep

## Example Usage

```typescript
import { TriggerWorkflowCollectionRep } from "@launchdarkly/mcp-server";

let value: TriggerWorkflowCollectionRep = {
  items: [
    {
      version: 1,
      maintainerId: "12ab3c45de678910abc12345",
      maintainer: {
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
      enabled: true,
      integrationKey: "generic-trigger",
      triggerCount: 3,
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [models.TriggerWorkflowRep](../models/triggerworkflowrep.md)[] | :heavy_minus_sign:                                             | An array of flag triggers                                      |
| `links`                                                        | Record<string, [models.Link](../models/link.md)>               | :heavy_minus_sign:                                             | The location and content type of related resources             |