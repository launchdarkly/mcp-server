# VariationTool

## Example Usage

```typescript
import { VariationTool } from "@launchdarkly/mcp-server/models/components";

let value: VariationTool = {
  key: "key",
  version: 2,
  customParameters: {
    "key": "",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `key`                                                       | *string*                                                    | :heavy_check_mark:                                          | The key of the tool to use.                                 |
| `version`                                                   | *number*                                                    | :heavy_check_mark:                                          | The version of the tool.                                    |
| `customParameters`                                          | Record<string, *any*>                                       | :heavy_minus_sign:                                          | Custom metadata and configuration for application-level use |