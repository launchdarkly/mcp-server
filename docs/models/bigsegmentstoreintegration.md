# BigSegmentStoreIntegration

## Example Usage

```typescript
import { BigSegmentStoreIntegration } from "@launchdarkly/mcp-server";

let value: BigSegmentStoreIntegration = {
  links: {
    self: {},
    parent: {},
    project: {},
    environment: {},
  },
  id: "12ab3c4d5ef1a2345bcde67f",
  integrationKey: "redis",
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
  status: {
    available: true,
    potentiallyStale: false,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                  | [models.BigSegmentStoreIntegrationLinks](../models/bigsegmentstoreintegrationlinks.md)                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The integration ID                                                                                       | 12ab3c4d5ef1a2345bcde67f                                                                                 |
| `integrationKey`                                                                                         | [models.BigSegmentStoreIntegrationIntegrationKey](../models/bigsegmentstoreintegrationintegrationkey.md) | :heavy_check_mark:                                                                                       | The integration key                                                                                      | redis                                                                                                    |
| `projectKey`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The project key                                                                                          | default                                                                                                  |
| `environmentKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The environment key                                                                                      | development                                                                                              |
| `config`                                                                                                 | Record<string, *any*>                                                                                    | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `on`                                                                                                     | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Whether the configuration is turned on                                                                   | true                                                                                                     |
| `tags`                                                                                                   | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | List of tags for this configuration                                                                      | []                                                                                                       |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Name of the configuration                                                                                | Development environment configuration                                                                    |
| `version`                                                                                                | *number*                                                                                                 | :heavy_check_mark:                                                                                       | Version of the current configuration                                                                     | 1                                                                                                        |
| `access`                                                                                                 | [models.Access](../models/access.md)                                                                     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `status`                                                                                                 | [models.BigSegmentStoreStatus](../models/bigsegmentstorestatus.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |