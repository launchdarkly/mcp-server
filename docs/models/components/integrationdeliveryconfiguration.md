# IntegrationDeliveryConfiguration

## Example Usage

```typescript
import { IntegrationDeliveryConfiguration } from "@launchdarkly/mcp-server/models/components";

let value: IntegrationDeliveryConfiguration = {
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                              | [components.IntegrationDeliveryConfigurationLinks](../../models/components/integrationdeliveryconfigurationlinks.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The integration ID                                                                                                   | 12ab3c4d5ef1a2345bcde67f                                                                                             |
| `integrationKey`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The integration key                                                                                                  | example-integration-key                                                                                              |
| `projectKey`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The project key                                                                                                      | default                                                                                                              |
| `environmentKey`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The environment key                                                                                                  | development                                                                                                          |
| `config`                                                                                                             | Record<string, *any*>                                                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `on`                                                                                                                 | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether the configuration is turned on                                                                               | true                                                                                                                 |
| `tags`                                                                                                               | *string*[]                                                                                                           | :heavy_check_mark:                                                                                                   | List of tags for this configuration                                                                                  | []                                                                                                                   |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Name of the configuration                                                                                            | Development environment configuration                                                                                |
| `version`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Version of the current configuration                                                                                 | 1                                                                                                                    |
| `access`                                                                                                             | [components.Access](../../models/components/access.md)                                                               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |