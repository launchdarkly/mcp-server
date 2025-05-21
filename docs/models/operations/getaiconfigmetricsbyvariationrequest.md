# GetAIConfigMetricsByVariationRequest

## Example Usage

```typescript
import { GetAIConfigMetricsByVariationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetAIConfigMetricsByVariationRequest = {
  ldAPIVersion: "beta",
  projectKey: "<value>",
  configKey: "<value>",
  from: 701291,
  to: 972605,
  env: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                                               | [operations.GetAIConfigMetricsByVariationLDAPIVersion](../../models/operations/getaiconfigmetricsbyvariationldapiversion.md) | :heavy_check_mark:                                                                                                           | Version of the endpoint.                                                                                                     |
| `projectKey`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `configKey`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `from`                                                                                                                       | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The starting time, as milliseconds since epoch (inclusive).                                                                  |
| `to`                                                                                                                         | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`.                        |
| `env`                                                                                                                        | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | An environment key. Only metrics from this environment will be included.                                                     |