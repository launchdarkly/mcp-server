# ParentAndSelfLinks

The location and content type of related resources

## Example Usage

```typescript
import { ParentAndSelfLinks } from "@launchdarkly/mcp-server/models/components";

let value: ParentAndSelfLinks = {
  self: {
    href: "href",
    type: "type",
  },
  parent: {
    href: "href",
    type: "type",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `self`                                                     | [components.CoreLink](../../models/components/corelink.md) | :heavy_check_mark:                                         | N/A                                                        | {<br/>"href": "href",<br/>"type": "type"<br/>}             |
| `parent`                                                   | [components.CoreLink](../../models/components/corelink.md) | :heavy_check_mark:                                         | N/A                                                        | {<br/>"href": "href",<br/>"type": "type"<br/>}             |