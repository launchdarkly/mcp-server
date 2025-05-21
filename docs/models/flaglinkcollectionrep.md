# FlagLinkCollectionRep

## Example Usage

```typescript
import { FlagLinkCollectionRep } from "@launchdarkly/mcp-server";

let value: FlagLinkCollectionRep = {
  items: [
    {
      links: {
        "key": {},
      },
      key: "flag-link-key-123abc",
      id: "1234a56b7c89d012345e678f",
      deepLink: "https://example.com/archives/123123123",
      timestamp: {},
      title: "Example link title",
      description: "Example link description",
      createdAt: 469720,
    },
  ],
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `items`                                            | [models.FlagLinkRep](../models/flaglinkrep.md)[]   | :heavy_check_mark:                                 | An array of flag links                             |
| `links`                                            | Record<string, [models.Link](../models/link.md)>   | :heavy_check_mark:                                 | The location and content type of related resources |