# PatchIntegrationDeliveryConfigurationRequest

## Example Usage

```typescript
import { PatchIntegrationDeliveryConfigurationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchIntegrationDeliveryConfigurationRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  integrationKey: "<value>",
  id: "<value>",
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectKey`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | The project key                                                          |
| `environmentKey`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | The environment key                                                      |
| `integrationKey`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | The integration key                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The configuration ID                                                     |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |