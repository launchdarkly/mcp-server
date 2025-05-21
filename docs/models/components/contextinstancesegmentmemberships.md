# ContextInstanceSegmentMemberships

## Example Usage

```typescript
import { ContextInstanceSegmentMemberships } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                      | [components.ContextInstanceSegmentMembership](../../models/components/contextinstancesegmentmembership.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `links`                                                                                                      | Record<string, [components.Link](../../models/components/link.md)>                                           | :heavy_check_mark:                                                                                           | The location and content type of related resources                                                           |