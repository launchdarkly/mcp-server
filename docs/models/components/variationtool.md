# VariationTool

## Example Usage

```typescript
import { VariationTool } from "@launchdarkly/mcp-server/models/components";

let value: VariationTool = {
  key: "key",
  version: 2,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `key`                       | *string*                    | :heavy_check_mark:          | The key of the tool to use. |
| `version`                   | *number*                    | :heavy_check_mark:          | The version of the tool.    |