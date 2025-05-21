# ContextAttributeValue

## Example Usage

```typescript
import { ContextAttributeValue } from "@launchdarkly/mcp-server/models/components";

let value: ContextAttributeValue = {
  name: "Sandy",
  weight: 35,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                        | *any*                                                                                                         | :heavy_check_mark:                                                                                            | A value for a context attribute.                                                                              | Sandy                                                                                                         |
| `weight`                                                                                                      | *number*                                                                                                      | :heavy_check_mark:                                                                                            | A relative estimate of the number of contexts seen recently that have a matching value for a given attribute. | 35                                                                                                            |