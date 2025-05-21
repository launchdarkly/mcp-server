# BigSegmentStoreIntegrationCollection

## Example Usage

```typescript
import { BigSegmentStoreIntegrationCollection } from "@launchdarkly/mcp-server/models/components";

let value: BigSegmentStoreIntegrationCollection = {
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
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                      | [components.BigSegmentStoreIntegrationCollectionLinks](../../models/components/bigsegmentstoreintegrationcollectionlinks.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `items`                                                                                                                      | [components.BigSegmentStoreIntegration](../../models/components/bigsegmentstoreintegration.md)[]                             | :heavy_check_mark:                                                                                                           | An array of persistent store integration configurations                                                                      |