# WorkflowTemplateParameter

## Example Usage

```typescript
import { WorkflowTemplateParameter } from "@launchdarkly/mcp-server";

let value: WorkflowTemplateParameter = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `path`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | The path of the property to parameterize, relative to its parent condition or instruction |
| `default`                                                                                 | [models.ParameterDefault](../models/parameterdefault.md)                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `valid`                                                                                   | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Whether the default value is valid for the target flag and environment                    |