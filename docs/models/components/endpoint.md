# Endpoint

## Example Usage

```typescript
import { Endpoint } from "@launchdarkly/mcp-server/models/components";

let value: Endpoint = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | [components.HeaderItems](../../models/components/headeritems.md)[]   | :heavy_minus_sign:                                                   | N/A                                                                  |
| `hmacSignature`                                                      | [components.HMACSignature](../../models/components/hmacsignature.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `method`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `url`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |