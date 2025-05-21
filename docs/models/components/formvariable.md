# FormVariable

## Example Usage

```typescript
import { FormVariable } from "@launchdarkly/mcp-server/models/components";

let value: FormVariable = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `key`                                                                  | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `placeholder`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `isOptional`                                                           | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `defaultValue`                                                         | *any*                                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `allowedValues`                                                        | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `dynamicOptions`                                                       | [components.DynamicOptions](../../models/components/dynamicoptions.md) | :heavy_minus_sign:                                                     | N/A                                                                    |