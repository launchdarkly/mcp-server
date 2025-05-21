# ContextAttributeNames

## Example Usage

```typescript
import { ContextAttributeNames } from "@launchdarkly/mcp-server/models/components";

let value: ContextAttributeNames = {
  kind: "user",
  names: [
    {
      name: "/firstName",
      weight: 2225,
      redacted: false,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `kind`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The kind associated with this collection of context attribute names.                 | user                                                                                 |
| `names`                                                                              | [components.ContextAttributeName](../../models/components/contextattributename.md)[] | :heavy_check_mark:                                                                   | A collection of context attribute names.                                             |                                                                                      |