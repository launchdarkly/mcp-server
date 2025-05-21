# IntegrationDeliveryConfigurationCollection

## Example Usage

```typescript
import { IntegrationDeliveryConfigurationCollection } from "@launchdarkly/mcp-server/models/components";

let value: IntegrationDeliveryConfigurationCollection = {
  links: {
    self: {},
  },
  items: [
    {
      links: {
        self: {},
        parent: {},
        project: {},
        environment: {},
      },
      id: "12ab3c4d5ef1a2345bcde67f",
      integrationKey: "example-integration-key",
      projectKey: "default",
      environmentKey: "development",
      config: {
        "key": "<value>",
      },
      on: true,
      tags: [],
      name: "Development environment configuration",
      version: 1,
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                  | [components.IntegrationDeliveryConfigurationCollectionLinks](../../models/components/integrationdeliveryconfigurationcollectionlinks.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `items`                                                                                                                                  | [components.IntegrationDeliveryConfiguration](../../models/components/integrationdeliveryconfiguration.md)[]                             | :heavy_check_mark:                                                                                                                       | An array of integration delivery configurations                                                                                          |