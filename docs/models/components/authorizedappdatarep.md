# AuthorizedAppDataRep

## Example Usage

```typescript
import { AuthorizedAppDataRep } from "@launchdarkly/mcp-server/models/components";

let value: AuthorizedAppDataRep = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_minus_sign:                                                 | N/A                                                                |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the authorized application                               |
| `isScim`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether the application is authorized through SCIM                 |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The authorized application name                                    |
| `maintainerName`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | The name of the maintainer for this authorized application         |