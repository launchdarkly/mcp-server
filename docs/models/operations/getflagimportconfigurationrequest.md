# GetFlagImportConfigurationRequest

## Example Usage

```typescript
import { GetFlagImportConfigurationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetFlagImportConfigurationRequest = {
  projectKey: "<value>",
  integrationKey: "<value>",
  integrationId: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectKey`                              | *string*                                  | :heavy_check_mark:                        | The project key                           |
| `integrationKey`                          | *string*                                  | :heavy_check_mark:                        | The integration key, for example, `split` |
| `integrationId`                           | *string*                                  | :heavy_check_mark:                        | The integration ID                        |