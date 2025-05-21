# GetIntegrationDeliveryConfigurationByIdRequest

## Example Usage

```typescript
import { GetIntegrationDeliveryConfigurationByIdRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetIntegrationDeliveryConfigurationByIdRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  integrationKey: "<value>",
  id: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `environmentKey`     | *string*             | :heavy_check_mark:   | The environment key  |
| `integrationKey`     | *string*             | :heavy_check_mark:   | The integration key  |
| `id`                 | *string*             | :heavy_check_mark:   | The configuration ID |