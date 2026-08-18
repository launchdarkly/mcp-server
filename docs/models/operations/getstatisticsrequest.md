# GetStatisticsRequest

## Example Usage

```typescript
import { GetStatisticsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetStatisticsRequest = {
  projectKey: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `projectKey`                          | *string*                              | :heavy_check_mark:                    | The project key                       |
| `flagKey`                             | *string*                              | :heavy_minus_sign:                    | Filter results to a specific flag key |