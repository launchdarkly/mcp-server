# GetMauSdksByTypeRequest

## Example Usage

```typescript
import { GetMauSdksByTypeRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetMauSdksByTypeRequest = {};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `from`                                                                                                                                       | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | The data returned starts from this timestamp. Defaults to seven days ago. The timestamp is in Unix milliseconds, for example, 1656694800000. |
| `to`                                                                                                                                         | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | The data returned ends at this timestamp. Defaults to the current time. The timestamp is in Unix milliseconds, for example, 1657904400000.   |
| `sdktype`                                                                                                                                    | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | The type of SDK with monthly active users (MAU) to list. Must be either `client` or `server`.                                                |