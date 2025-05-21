# ApplicationVersionsCollectionRep

## Example Usage

```typescript
import { ApplicationVersionsCollectionRep } from "@launchdarkly/mcp-server";

let value: ApplicationVersionsCollectionRep = {
  items: [
    {
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
      autoAdded: true,
      key: "2",
      name: "01.02.03",
      supported: true,
    },
  ],
  totalCount: 1,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `links`                                                              | Record<string, [models.Link](../models/link.md)>                     | :heavy_minus_sign:                                                   | The location and content type of related resources                   |                                                                      |
| `items`                                                              | [models.ApplicationVersionRep](../models/applicationversionrep.md)[] | :heavy_minus_sign:                                                   | A list of the versions for this application                          |                                                                      |
| `totalCount`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | The number of versions for this application                          | 1                                                                    |