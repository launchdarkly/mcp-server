# Endpoint

## Example Usage

```typescript
import { Endpoint } from "@launchdarkly/mcp-server";

let value: Endpoint = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `headers`                                          | [models.HeaderItems](../models/headeritems.md)[]   | :heavy_minus_sign:                                 | N/A                                                |
| `hmacSignature`                                    | [models.HMACSignature](../models/hmacsignature.md) | :heavy_minus_sign:                                 | N/A                                                |
| `method`                                           | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `url`                                              | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |