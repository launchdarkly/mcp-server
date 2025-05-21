# GetExperimentResultsRequest

## Example Usage

```typescript
import { GetExperimentResultsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetExperimentResultsRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  experimentKey: "<value>",
  metricKey: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The project key                                                                                   |
| `environmentKey`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | The environment key                                                                               |
| `experimentKey`                                                                                   | *string*                                                                                          | :heavy_check_mark:                                                                                | The experiment key                                                                                |
| `metricKey`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | The metric key                                                                                    |
| `iterationId`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | The iteration ID                                                                                  |
| `expand`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | A comma-separated list of fields to expand in the response. Supported fields are explained above. |