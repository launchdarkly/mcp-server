# GetFlagStatusChartRequest

## Example Usage

```typescript
import { GetFlagStatusChartRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetFlagStatusChartRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `projectKey`                             | *string*                                 | :heavy_check_mark:                       | The project key                          |
| `environmentKey`                         | *string*                                 | :heavy_check_mark:                       | The environment key                      |
| `applicationKey`                         | *string*                                 | :heavy_minus_sign:                       | Comma separated list of application keys |