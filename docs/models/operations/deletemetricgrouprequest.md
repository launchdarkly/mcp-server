# DeleteMetricGroupRequest

## Example Usage

```typescript
import { DeleteMetricGroupRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteMetricGroupRequest = {
  projectKey: "<value>",
  metricGroupKey: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectKey`         | *string*             | :heavy_check_mark:   | The project key      |
| `metricGroupKey`     | *string*             | :heavy_check_mark:   | The metric group key |