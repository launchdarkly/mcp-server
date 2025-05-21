# GetMetricGroupRequest

## Example Usage

```typescript
import { GetMetricGroupRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetMetricGroupRequest = {
  projectKey: "<value>",
  metricGroupKey: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The project key                                                                              |
| `metricGroupKey`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | The metric group key                                                                         |
| `expand`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | A comma-separated list of properties that can reveal additional information in the response. |