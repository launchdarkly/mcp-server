# FormVariable

## Example Usage

```typescript
import { FormVariable } from "@launchdarkly/mcp-server";

let value: FormVariable = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `key`                                                | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `name`                                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `type`                                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `description`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `placeholder`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `isOptional`                                         | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `defaultValue`                                       | *any*                                                | :heavy_minus_sign:                                   | N/A                                                  |
| `allowedValues`                                      | *string*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `dynamicOptions`                                     | [models.DynamicOptions](../models/dynamicoptions.md) | :heavy_minus_sign:                                   | N/A                                                  |