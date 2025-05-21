# IntegrationConfigurationCollectionRep

## Example Usage

```typescript
import { IntegrationConfigurationCollectionRep } from "@launchdarkly/mcp-server";

let value: IntegrationConfigurationCollectionRep = {
  items: [
    {
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
    },
  ],
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `items`                                                                            | [models.IntegrationConfigurationsRep](../models/integrationconfigurationsrep.md)[] | :heavy_check_mark:                                                                 | An array of integration configurations                                             |
| `links`                                                                            | Record<string, [models.Link](../models/link.md)>                                   | :heavy_check_mark:                                                                 | The location and content type of related resources                                 |