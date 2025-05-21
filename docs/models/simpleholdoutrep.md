# SimpleHoldoutRep

## Example Usage

```typescript
import { SimpleHoldoutRep } from "@launchdarkly/mcp-server";

let value: SimpleHoldoutRep = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `key`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `status`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `createdAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `updatedAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `experiments`                                                      | [models.RelatedExperimentRep](../models/relatedexperimentrep.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |