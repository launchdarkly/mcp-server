# CreateBigSegmentStoreIntegrationRequest

## Example Usage

```typescript
import { CreateBigSegmentStoreIntegrationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateBigSegmentStoreIntegrationRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  integrationKey: "<value>",
  integrationDeliveryConfigurationPost: {
    on: false,
    config: {
      "key": "<value>",
    },
    tags: [
      "example-tag",
    ],
    name: "Sample integration",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | The project key                                                                                     |
| `environmentKey`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | The environment key                                                                                 |
| `integrationKey`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | The integration key, either `redis` or `dynamodb`                                                   |
| `integrationDeliveryConfigurationPost`                                                              | [models.IntegrationDeliveryConfigurationPost](../../models/integrationdeliveryconfigurationpost.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |