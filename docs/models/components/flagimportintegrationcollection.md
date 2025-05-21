# FlagImportIntegrationCollection

## Example Usage

```typescript
import { FlagImportIntegrationCollection } from "@launchdarkly/mcp-server/models/components";

let value: FlagImportIntegrationCollection = {
  links: {
    self: {},
  },
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `links`                                                                                                            | [components.FlagImportIntegrationCollectionLinks](../../models/components/flagimportintegrationcollectionlinks.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `items`                                                                                                            | [components.FlagImportIntegration](../../models/components/flagimportintegration.md)[]                             | :heavy_check_mark:                                                                                                 | An array of flag import configurations                                                                             |