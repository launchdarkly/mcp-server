# DeleteFlagImportConfigurationRequest

## Example Usage

```typescript
import { DeleteFlagImportConfigurationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteFlagImportConfigurationRequest = {
  projectKey: "<value>",
  integrationKey: "<value>",
  integrationId: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `integrationKey`    | *string*            | :heavy_check_mark:  | The integration key |
| `integrationId`     | *string*            | :heavy_check_mark:  | The integration ID  |