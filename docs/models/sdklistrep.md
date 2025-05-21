# SDKListRep

## Example Usage

```typescript
import { SDKListRep } from "@launchdarkly/mcp-server";

let value: SDKListRep = {
  links: {
    "key": "<value>",
  },
  sdks: [
    "Android",
    "Java",
    "Node.js",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `links`                                            | Record<string, *any*>                              | :heavy_check_mark:                                 | The location and content type of related resources |                                                    |
| `sdks`                                             | *string*[]                                         | :heavy_check_mark:                                 | The list of SDK names                              | [<br/>"Android",<br/>"Java",<br/>"Node.js"<br/>]   |