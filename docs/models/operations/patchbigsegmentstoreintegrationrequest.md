# PatchBigSegmentStoreIntegrationRequest

## Example Usage

```typescript
import { PatchBigSegmentStoreIntegrationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchBigSegmentStoreIntegrationRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  integrationKey: "<value>",
  integrationId: "<value>",
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
| `integrationKey`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | The integration key, either `redis` or `dynamodb`                        |
| `integrationId`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | The integration ID                                                       |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |