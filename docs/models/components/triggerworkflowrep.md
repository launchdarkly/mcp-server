# TriggerWorkflowRep

## Example Usage

```typescript
import { TriggerWorkflowRep } from "@launchdarkly/mcp-server/models/components";

let value: TriggerWorkflowRep = {
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `version`                                                                      | *number*                                                                       | :heavy_minus_sign:                                                             | The flag trigger version                                                       | 1                                                                              |
| `creationDate`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `maintainerId`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | The ID of the flag trigger maintainer                                          | 12ab3c45de678910abc12345                                                       |
| `maintainer`                                                                   | [components.MemberSummary](../../models/components/membersummary.md)           | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether the flag trigger is currently enabled                                  | true                                                                           |
| `integrationKey`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | The unique identifier of the integration for your trigger                      | generic-trigger                                                                |
| `instructions`                                                                 | Record<string, *any*>[]                                                        | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `lastTriggeredAt`                                                              | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `recentTriggerBodies`                                                          | [components.RecentTriggerBody](../../models/components/recenttriggerbody.md)[] | :heavy_minus_sign:                                                             | Details on recent flag trigger requests.                                       |                                                                                |
| `triggerCount`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | Number of times the trigger has been executed                                  | 3                                                                              |
| `triggerURL`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | The unguessable URL for this flag trigger                                      |                                                                                |
| `links`                                                                        | Record<string, [components.Link](../../models/components/link.md)>             | :heavy_minus_sign:                                                             | The location and content type of related resources                             |                                                                                |