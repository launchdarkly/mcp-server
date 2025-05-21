# FlagReferenceCollectionRep

## Example Usage

```typescript
import { FlagReferenceCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: FlagReferenceCollectionRep = {
  totalCount: 25,
  items: [
    {
      projectKey: "default",
      flagKey: "enable-new-payment-structure",
      referencesAdded: 2,
      referencesRemoved: 5,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `totalCount`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | The total number of flag references                                          | 25                                                                           |
| `items`                                                                      | [components.FlagReferenceRep](../../models/components/flagreferencerep.md)[] | :heavy_check_mark:                                                           | A list of flag references                                                    |                                                                              |