# ContextAttributeValues

## Example Usage

```typescript
import { ContextAttributeValues } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `kind`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The kind associated with this collection of context attribute values.                  | user                                                                                   |
| `values`                                                                               | [components.ContextAttributeValue](../../models/components/contextattributevalue.md)[] | :heavy_check_mark:                                                                     | A collection of context attribute values.                                              |                                                                                        |