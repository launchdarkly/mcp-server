# Clause

## Example Usage

```typescript
import { Clause } from "@launchdarkly/mcp-server";

let value: Clause = {
  attribute: "<value>",
  op: "<value>",
  values: [
    "<value>",
  ],
  negate: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_minus_sign: | N/A                |
| `attribute`        | *string*           | :heavy_check_mark: | N/A                |
| `op`               | *string*           | :heavy_check_mark: | N/A                |
| `values`           | *any*[]            | :heavy_check_mark: | N/A                |
| `contextKind`      | *string*           | :heavy_minus_sign: | N/A                |
| `negate`           | *boolean*          | :heavy_check_mark: | N/A                |