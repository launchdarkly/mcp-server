# VariationToolPost

## Example Usage

```typescript
import { VariationToolPost } from "@launchdarkly/mcp-server/models/components";

let value: VariationToolPost = {
  key: "key",
  version: 0,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `key`                       | *string*                    | :heavy_check_mark:          | The key of the tool to use. |
| `version`                   | *number*                    | :heavy_check_mark:          | The version of the tool.    |