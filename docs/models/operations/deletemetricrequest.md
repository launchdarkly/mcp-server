# DeleteMetricRequest

## Example Usage

```typescript
import { DeleteMetricRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteMetricRequest = {
  projectKey: "<value>",
  metricKey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectKey`       | *string*           | :heavy_check_mark: | The project key    |
| `metricKey`        | *string*           | :heavy_check_mark: | The metric key     |