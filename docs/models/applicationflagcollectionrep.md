# ApplicationFlagCollectionRep

## Example Usage

```typescript
import { ApplicationFlagCollectionRep } from "@launchdarkly/mcp-server";

let value: ApplicationFlagCollectionRep = {
  items: [
    {
      name: "Example flag",
      key: "flag-key-123abc",
    },
  ],
  totalCount: 1,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `items`                                                         | [models.FlagListingRep](../models/flaglistingrep.md)[]          | :heavy_minus_sign:                                              | A list of the flags that have been evaluated by the application |                                                                 |
| `totalCount`                                                    | *number*                                                        | :heavy_minus_sign:                                              | The number of flags that have been evaluated by the application | 1                                                               |
| `links`                                                         | Record<string, [models.Link](../models/link.md)>                | :heavy_minus_sign:                                              | The location and content type of related resources              |                                                                 |