# UpdateIntegrationConfigurationRequest

## Example Usage

```typescript
import { UpdateIntegrationConfigurationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: UpdateIntegrationConfigurationRequest = {
  integrationConfigurationId: "<value>",
  requestBody: [
    {
      op: "replace",
      path: "/exampleField",
      value: "new example value",
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `integrationConfigurationId`                              | *string*                                                  | :heavy_check_mark:                                        | The ID of the integration configuration                   |
| `requestBody`                                             | [models.PatchOperation](../../models/patchoperation.md)[] | :heavy_check_mark:                                        | N/A                                                       |