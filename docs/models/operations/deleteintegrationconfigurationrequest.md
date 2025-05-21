# DeleteIntegrationConfigurationRequest

## Example Usage

```typescript
import { DeleteIntegrationConfigurationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteIntegrationConfigurationRequest = {
  integrationConfigurationId: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `integrationConfigurationId`                          | *string*                                              | :heavy_check_mark:                                    | The ID of the integration configuration to be deleted |