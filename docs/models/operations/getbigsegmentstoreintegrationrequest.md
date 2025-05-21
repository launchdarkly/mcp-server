# GetBigSegmentStoreIntegrationRequest

## Example Usage

```typescript
import { GetBigSegmentStoreIntegrationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetBigSegmentStoreIntegrationRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  integrationKey: "<value>",
  integrationId: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `projectKey`                                      | *string*                                          | :heavy_check_mark:                                | The project key                                   |
| `environmentKey`                                  | *string*                                          | :heavy_check_mark:                                | The environment key                               |
| `integrationKey`                                  | *string*                                          | :heavy_check_mark:                                | The integration key, either `redis` or `dynamodb` |
| `integrationId`                                   | *string*                                          | :heavy_check_mark:                                | The integration ID                                |