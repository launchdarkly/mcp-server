# CreateFlagImportConfigurationRequest

## Example Usage

```typescript
import { CreateFlagImportConfigurationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateFlagImportConfigurationRequest = {
  projectKey: "<value>",
  integrationKey: "<value>",
  flagImportConfigurationPost: {
    config: {
      "key": "<value>",
    },
    tags: [
      "example-tag",
    ],
    name: "Sample configuration",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `projectKey`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | The project key                                                                                  |
| `integrationKey`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The integration key                                                                              |
| `flagImportConfigurationPost`                                                                    | [components.FlagImportConfigurationPost](../../models/components/flagimportconfigurationpost.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |