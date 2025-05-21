# GetIntegrationDeliveryConfigurationByEnvironmentRequest

## Example Usage

```typescript
import { GetIntegrationDeliveryConfigurationByEnvironmentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetIntegrationDeliveryConfigurationByEnvironmentRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `environmentKey`    | *string*            | :heavy_check_mark:  | The environment key |