# PostInsightGroupParams

## Example Usage

```typescript
import { PostInsightGroupParams } from "@launchdarkly/mcp-server/models/components";

let value: PostInsightGroupParams = {
  name: "Production - All Apps",
  key: "default-production-all-apps",
  projectKey: "default",
  environmentKey: "production",
  applicationKeys: [
    "billing-service",
    "inventory-service",
  ],
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The name of the insight group                                                                                                         | Production - All Apps                                                                                                                 |
| `key`                                                                                                                                 | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The key of the insight group                                                                                                          | default-production-all-apps                                                                                                           |
| `projectKey`                                                                                                                          | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The projectKey to be associated with the insight group                                                                                | default                                                                                                                               |
| `environmentKey`                                                                                                                      | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The environmentKey to be associated with the insight group                                                                            | production                                                                                                                            |
| `applicationKeys`                                                                                                                     | *string*[]                                                                                                                            | :heavy_minus_sign:                                                                                                                    | The application keys to associate with the insight group. If not provided, the insight group will include data from all applications. | [<br/>"billing-service",<br/>"inventory-service"<br/>]                                                                                |