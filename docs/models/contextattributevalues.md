# ContextAttributeValues

## Example Usage

```typescript
import { ContextAttributeValues } from "@launchdarkly/mcp-server";

let value: ContextAttributeValues = {
  kind: "user",
  values: [
    {
      name: "Sandy",
      weight: 35,
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `kind`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The kind associated with this collection of context attribute values. | user                                                                  |
| `values`                                                              | [models.ContextAttributeValue](../models/contextattributevalue.md)[]  | :heavy_check_mark:                                                    | A collection of context attribute values.                             |                                                                       |