# GetStaleFlagsChartRequest

## Example Usage

```typescript
import { GetStaleFlagsChartRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetStaleFlagsChartRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `projectKey`                                                      | *string*                                                          | :heavy_check_mark:                                                | The project key                                                   |
| `environmentKey`                                                  | *string*                                                          | :heavy_check_mark:                                                | The environment key                                               |
| `applicationKey`                                                  | *string*                                                          | :heavy_minus_sign:                                                | Comma separated list of application keys                          |
| `groupBy`                                                         | *string*                                                          | :heavy_minus_sign:                                                | Property to group results by. Options: `maintainer`               |
| `maintainerId`                                                    | *string*                                                          | :heavy_minus_sign:                                                | Comma-separated list of individual maintainers to filter results. |
| `maintainerTeamKey`                                               | *string*                                                          | :heavy_minus_sign:                                                | Comma-separated list of team maintainer keys to filter results.   |
| `expand`                                                          | *string*                                                          | :heavy_minus_sign:                                                | Options: `metrics`                                                |