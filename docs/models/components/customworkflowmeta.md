# CustomWorkflowMeta

## Example Usage

```typescript
import { CustomWorkflowMeta } from "@launchdarkly/mcp-server/models/components";

let value: CustomWorkflowMeta = {
  name: "Example workflow name",
  stage: {
    index: 0,
    name: "Stage 1",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The name of the workflow stage that required this approval request                       | Example workflow name                                                                    |
| `stage`                                                                                  | [components.CustomWorkflowStageMeta](../../models/components/customworkflowstagemeta.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |