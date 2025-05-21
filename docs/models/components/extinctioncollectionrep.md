# ExtinctionCollectionRep

## Example Usage

```typescript
import { ExtinctionCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: ExtinctionCollectionRep = {
  links: {
    "key": {},
  },
  items: {
    "key": [
      {
        revision: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
        message: "Remove flag for launched feature",
        time: 916621,
        flagKey: "enable-feature",
        projKey: "default",
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `links`                                                                          | Record<string, [components.Link](../../models/components/link.md)>               | :heavy_check_mark:                                                               | The location and content type of related resources                               |
| `items`                                                                          | Record<string, [components.Extinction](../../models/components/extinction.md)[]> | :heavy_check_mark:                                                               | An array of extinction events                                                    |