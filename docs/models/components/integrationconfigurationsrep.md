# IntegrationConfigurationsRep

## Example Usage

```typescript
import { IntegrationConfigurationsRep } from "@launchdarkly/mcp-server/models/components";

let value: IntegrationConfigurationsRep = {
  links: {
    "key": {},
  },
  id: "<id>",
  name: "Example Datadog integration",
  integrationKey: "datadog",
  tags: [
    "testing",
  ],
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
  capabilityConfig: {
    approvals: {
      additionalFormVariables: [
        {},
      ],
    },
    auditLogEventsHook: {
      statements: [
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             | Example                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                                                 | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                      | The location and content type of related resources                                                                                                                                                      |                                                                                                                                                                                                         |
| `id`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                      | The unique identifier for this integration configuration                                                                                                                                                |                                                                                                                                                                                                         |
| `name`                                                                                                                                                                                                  | *string*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                      | A human-friendly name for the integration                                                                                                                                                               | Example Datadog integration                                                                                                                                                                             |
| `createdAt`                                                                                                                                                                                             | *number*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |
| `integrationKey`                                                                                                                                                                                        | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | The type of integration                                                                                                                                                                                 | datadog                                                                                                                                                                                                 |
| `tags`                                                                                                                                                                                                  | *string*[]                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                      | An array of tags for this integration                                                                                                                                                                   | [<br/>"testing"<br/>]                                                                                                                                                                                   |
| `enabled`                                                                                                                                                                                               | *boolean*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                      | Whether the integration is currently active                                                                                                                                                             |                                                                                                                                                                                                         |
| `access`                                                                                                                                                                                                | [components.Access](../../models/components/access.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |
| `configValues`                                                                                                                                                                                          | Record<string, *any*>                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                      | Details on configuration for an integration of this type. Refer to the <code>formVariables</code> field in the corresponding <code>manifest.json</code> for a full list of fields for each integration. |                                                                                                                                                                                                         |
| `capabilityConfig`                                                                                                                                                                                      | [components.CapabilityConfigRep](../../models/components/capabilityconfigrep.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |