# ValuePut

## Example Usage

```typescript
import { ValuePut } from "@launchdarkly/mcp-server";

let value: ValuePut = {
  setting: "existing_variation_value_to_use",
  comment: "make sure this context experiences a specific variation",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `setting`                                                                         | *any*                                                                             | :heavy_minus_sign:                                                                | The variation value to set for the context. Must match the flag's variation type. | existing_variation_value_to_use                                                   |
| `comment`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | Optional comment describing the change                                            | make sure this context experiences a specific variation                           |