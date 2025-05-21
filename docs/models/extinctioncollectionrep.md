# ExtinctionCollectionRep

## Example Usage

```typescript
import { ExtinctionCollectionRep } from "@launchdarkly/mcp-server";

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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `links`                                                        | Record<string, [models.Link](../models/link.md)>               | :heavy_check_mark:                                             | The location and content type of related resources             |
| `items`                                                        | Record<string, [models.Extinction](../models/extinction.md)[]> | :heavy_check_mark:                                             | An array of extinction events                                  |