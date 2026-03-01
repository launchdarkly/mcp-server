# ParentLink

## Example Usage

```typescript
import { ParentLink } from "@launchdarkly/mcp-server/models/components";

let value: ParentLink = {
  parent: {
    href: "href",
    type: "type",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `parent`                                                   | [components.CoreLink](../../models/components/corelink.md) | :heavy_check_mark:                                         | N/A                                                        | {<br/>"href": "href",<br/>"type": "type"<br/>}             |