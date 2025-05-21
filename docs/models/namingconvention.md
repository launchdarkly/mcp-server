# NamingConvention

## Example Usage

```typescript
import { NamingConvention } from "@launchdarkly/mcp-server";

let value: NamingConvention = {
  case: "kebabCase",
  prefix: "enable-",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `case`                                                             | [models.Case](../models/case.md)                                   | :heavy_minus_sign:                                                 | The casing convention to enforce for new flag keys in this project | kebabCase                                                          |
| `prefix`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | The prefix to enforce for new flag keys in this project            | enable-                                                            |