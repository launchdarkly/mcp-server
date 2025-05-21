# GetMetricRequest

## Example Usage

```typescript
import { GetMetricRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetMetricRequest = {
  projectKey: "<value>",
  metricKey: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The project key                                                                              |
| `metricKey`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The metric key                                                                               |
| `expand`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | A comma-separated list of properties that can reveal additional information in the response. |
| `versionId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The specific version ID of the metric                                                        |