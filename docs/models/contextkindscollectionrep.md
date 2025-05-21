# ContextKindsCollectionRep

## Example Usage

```typescript
import { ContextKindsCollectionRep } from "@launchdarkly/mcp-server";

let value: ContextKindsCollectionRep = {
  items: [
    {
      key: "organization-key-123abc",
      name: "Organization",
      description:
        "An example context kind, to enable targeting based on organization",
      version: 4,
      creationDate: 896018,
      lastModified: 55631,
      createdFrom: "<value>",
      hideInTargeting: false,
      archived: false,
    },
  ],
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `items`                                                | [models.ContextKindRep](../models/contextkindrep.md)[] | :heavy_check_mark:                                     | An array of context kinds                              |
| `links`                                                | Record<string, [models.Link](../models/link.md)>       | :heavy_check_mark:                                     | The location and content type of related resources     |