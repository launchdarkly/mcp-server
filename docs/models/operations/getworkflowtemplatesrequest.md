# GetWorkflowTemplatesRequest

## Example Usage

```typescript
import { GetWorkflowTemplatesRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetWorkflowTemplatesRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `summary`                                                               | *boolean*                                                               | :heavy_minus_sign:                                                      | Whether the entire template object or just a summary should be returned |
| `search`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The substring in either the name or description of a template           |