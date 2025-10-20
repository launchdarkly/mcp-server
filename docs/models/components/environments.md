# Environments

## Example Usage

```typescript
import { Environments } from "@launchdarkly/mcp-server/models/components";

let value: Environments = {
  totalCount: 2,
  items: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_minus_sign:                                                 | The location and content type of related resources                 |                                                                    |
| `totalCount`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | The number of environments returned                                | 2                                                                  |
| `items`                                                            | [components.Environment](../../models/components/environment.md)[] | :heavy_check_mark:                                                 | An array of environments                                           |                                                                    |