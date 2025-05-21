# FlagImportIntegration

## Example Usage

```typescript
import { FlagImportIntegration } from "@launchdarkly/mcp-server";

let value: FlagImportIntegration = {
  links: {
    self: {},
    parent: {},
    project: {},
  },
  id: "12ab3c4d5ef1a2345bcde67f",
  integrationKey: "split",
  projectKey: "default",
  config: {
    "key": "<value>",
  },
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
    status: "pending",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `links`                                                                                        | [models.FlagImportIntegrationLinks](../models/flagimportintegrationlinks.md)                   | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The integration ID                                                                             | 12ab3c4d5ef1a2345bcde67f                                                                       |
| `integrationKey`                                                                               | [models.FlagImportIntegrationIntegrationKey](../models/flagimportintegrationintegrationkey.md) | :heavy_check_mark:                                                                             | The integration key                                                                            | split                                                                                          |
| `projectKey`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The project key                                                                                | default                                                                                        |
| `config`                                                                                       | Record<string, *any*>                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `tags`                                                                                         | *string*[]                                                                                     | :heavy_check_mark:                                                                             | List of tags for this configuration                                                            | []                                                                                             |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | Name of the configuration                                                                      | Development environment configuration                                                          |
| `version`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | Version of the current configuration                                                           | 1                                                                                              |
| `access`                                                                                       | [models.Access](../models/access.md)                                                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `status`                                                                                       | [models.FlagImportStatus](../models/flagimportstatus.md)                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |