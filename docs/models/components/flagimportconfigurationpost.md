# FlagImportConfigurationPost

## Example Usage

```typescript
import { FlagImportConfigurationPost } from "@launchdarkly/mcp-server/models/components";

let value: FlagImportConfigurationPost = {
  config: {
    "key": "<value>",
  },
  tags: [
    "example-tag",
  ],
  name: "Sample configuration",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `config`                                 | Record<string, *any*>                    | :heavy_check_mark:                       | N/A                                      |                                          |
| `tags`                                   | *string*[]                               | :heavy_minus_sign:                       | Tags to associate with the configuration | [<br/>"example-tag"<br/>]                |
| `name`                                   | *string*                                 | :heavy_minus_sign:                       | Name to identify the configuration       | Sample configuration                     |