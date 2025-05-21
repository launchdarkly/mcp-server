# ApplicationFlagCollectionRep

## Example Usage

```typescript
import { ApplicationFlagCollectionRep } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.FlagListingRep](../../models/components/flaglistingrep.md)[] | :heavy_minus_sign:                                                       | A list of the flags that have been evaluated by the application          |                                                                          |
| `totalCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | The number of flags that have been evaluated by the application          | 1                                                                        |
| `links`                                                                  | Record<string, [components.Link](../../models/components/link.md)>       | :heavy_minus_sign:                                                       | The location and content type of related resources                       |                                                                          |