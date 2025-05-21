# ContextAttributeValuesCollection

## Example Usage

```typescript
import { ContextAttributeValuesCollection } from "@launchdarkly/mcp-server";

let value: ContextAttributeValuesCollection = {
  items: [
    {
      kind: "user",
      values: [
        {
          name: "Sandy",
          weight: 35,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [models.ContextAttributeValues](../models/contextattributevalues.md)[] | :heavy_check_mark:                                                     | A collection of context attribute value data grouped by kind.          |