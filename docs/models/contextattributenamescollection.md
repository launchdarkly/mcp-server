# ContextAttributeNamesCollection

## Example Usage

```typescript
import { ContextAttributeNamesCollection } from "@launchdarkly/mcp-server";

let value: ContextAttributeNamesCollection = {
  items: [
    {
      kind: "user",
      names: [
        {
          name: "/firstName",
          weight: 2225,
          redacted: false,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [models.ContextAttributeNames](../models/contextattributenames.md)[] | :heavy_check_mark:                                                   | A collection of context attribute name data grouped by kind.         |