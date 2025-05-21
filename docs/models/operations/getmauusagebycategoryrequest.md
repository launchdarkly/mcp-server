# GetMauUsageByCategoryRequest

## Example Usage

```typescript
import { GetMauUsageByCategoryRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetMauUsageByCategoryRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `from`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The series of data returned starts from this timestamp. Defaults to 30 days ago.  |
| `to`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | The series of data returned ends at this timestamp. Defaults to the current time. |