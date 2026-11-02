# GetExperimentRequest

## Example Usage

```typescript
import { GetExperimentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetExperimentRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  experimentKey: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                                                       | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The project key                                                                                                                    |
| `environmentKey`                                                                                                                   | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The environment key                                                                                                                |
| `experimentKey`                                                                                                                    | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The experiment key                                                                                                                 |
| `expand`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. |