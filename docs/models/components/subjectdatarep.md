# SubjectDataRep

## Example Usage

```typescript
import { SubjectDataRep } from "@launchdarkly/mcp-server/models/components";

let value: SubjectDataRep = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_minus_sign:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The subject's name                                                 |
| `avatarUrl`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | The subject's avatar                                               |