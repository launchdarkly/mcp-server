# ParentLink

## Example Usage

```typescript
import { ParentLink } from "@launchdarkly/mcp-server";

let value: ParentLink = {
  parent: {
    href: "href",
    type: "type",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `parent`                                 | [models.CoreLink](../models/corelink.md) | :heavy_check_mark:                       | N/A                                      | {<br/>"href": "href",<br/>"type": "type"<br/>} |