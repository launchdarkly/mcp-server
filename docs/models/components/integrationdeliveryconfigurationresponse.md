# IntegrationDeliveryConfigurationResponse

## Example Usage

```typescript
import { IntegrationDeliveryConfigurationResponse } from "@launchdarkly/mcp-server/models/components";

let value: IntegrationDeliveryConfigurationResponse = {
  statusCode: 200,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `statusCode`                               | *number*                                   | :heavy_minus_sign:                         | The status code returned by the validation | 200                                        |
| `error`                                    | *string*                                   | :heavy_minus_sign:                         | N/A                                        |                                            |
| `timestamp`                                | *number*                                   | :heavy_minus_sign:                         | N/A                                        |                                            |
| `responseBody`                             | *string*                                   | :heavy_minus_sign:                         | JSON response to the validation request    |                                            |