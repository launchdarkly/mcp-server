# ParentResourceRep

## Example Usage

```typescript
import { ParentResourceRep } from "@launchdarkly/mcp-server/models/components";

let value: ParentResourceRep = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_minus_sign:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The name of the parent resource                                    |
| `resource`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | The parent's resource specifier                                    |