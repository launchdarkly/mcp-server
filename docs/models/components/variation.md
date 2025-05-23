# Variation

variation of a flag

## Example Usage

```typescript
import { Variation } from "@launchdarkly/mcp-server/models/components";

let value: Variation = {
  id: "<id>",
  value: false,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | N/A                               |
| `name`                            | *string*                          | :heavy_minus_sign:                | N/A                               |
| `description`                     | *string*                          | :heavy_minus_sign:                | N/A                               |
| `value`                           | *components.FlagValueUnion*       | :heavy_check_mark:                | value of a feature flag variation |