# Conflict

## Example Usage

```typescript
import { Conflict } from "@launchdarkly/mcp-server/models/components";

let value: Conflict = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `instruction`                  | Record<string, *any*>          | :heavy_minus_sign:             | N/A                            |
| `reason`                       | *string*                       | :heavy_minus_sign:             | Reason why the conflict exists |