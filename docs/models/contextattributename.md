# ContextAttributeName

## Example Usage

```typescript
import { ContextAttributeName } from "@launchdarkly/mcp-server";

let value: ContextAttributeName = {
  name: "/firstName",
  weight: 2225,
  redacted: false,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | A context attribute's name.                                                                                  | /firstName                                                                                                   |
| `weight`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | A relative estimate of the number of contexts seen recently that have an attribute with the associated name. | 2225                                                                                                         |
| `redacted`                                                                                                   | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Whether or not the attribute has one or more redacted values.                                                | false                                                                                                        |