# GetExperimentationUnitsUsageRequest

## Example Usage

```typescript
import { GetExperimentationUnitsUsageRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetExperimentationUnitsUsageRequest = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `from`                                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month.         |
| `to`                                                                                                                           | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time.                               |
| `projectKey`                                                                                                                   | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A project key. If specified, `environmentKey` is required and results apply to the corresponding environment in this project.  |
| `environmentKey`                                                                                                               | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | An environment key. If specified, `projectKey` is required and results apply to the corresponding environment in this project. |