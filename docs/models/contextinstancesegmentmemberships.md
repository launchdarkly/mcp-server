# ContextInstanceSegmentMemberships

## Example Usage

```typescript
import { ContextInstanceSegmentMemberships } from "@launchdarkly/mcp-server";

let value: ContextInstanceSegmentMemberships = {
  items: [
    {
      name: "Segment Name",
      key: "segment-key-123abc",
      description: "Segment description",
      unbounded: false,
      external: "https://amplitude.com/myCohort",
      isMember: true,
      isIndividuallyTargeted: true,
      isRuleTargeted: false,
      links: {
        "key": {},
      },
    },
  ],
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `items`                                                                                    | [models.ContextInstanceSegmentMembership](../models/contextinstancesegmentmembership.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `links`                                                                                    | Record<string, [models.Link](../models/link.md)>                                           | :heavy_check_mark:                                                                         | The location and content type of related resources                                         |