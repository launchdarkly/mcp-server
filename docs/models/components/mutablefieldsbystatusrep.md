# MutableFieldsByStatusRep

## Example Usage

```typescript
import { MutableFieldsByStatusRep } from "@launchdarkly/mcp-server/models/components";

let value: MutableFieldsByStatusRep = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `notStarted`               | Record<string, *string*[]> | :heavy_minus_sign:         | N/A                        |
| `running`                  | Record<string, *string*[]> | :heavy_minus_sign:         | N/A                        |
| `stopped`                  | Record<string, *string*[]> | :heavy_minus_sign:         | N/A                        |