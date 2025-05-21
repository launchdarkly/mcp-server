# GetDeploymentsRequest

## Example Usage

```typescript
import { GetDeploymentsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetDeploymentsRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `projectKey`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | The project key                                                             |
| `environmentKey`                                                            | *string*                                                                    | :heavy_check_mark:                                                          | The environment key                                                         |
| `applicationKey`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | Comma separated list of application keys                                    |
| `limit`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | The number of deployments to return. Default is 20. Maximum allowed is 100. |
| `expand`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Expand properties in response. Options: `pullRequests`, `flagReferences`    |
| `from`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | Unix timestamp in milliseconds. Default value is 7 days ago.                |
| `to`                                                                        | *number*                                                                    | :heavy_minus_sign:                                                          | Unix timestamp in milliseconds. Default value is now.                       |
| `after`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | Identifier used for pagination                                              |
| `before`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Identifier used for pagination                                              |
| `kind`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | The deployment kind                                                         |
| `status`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The deployment status                                                       |