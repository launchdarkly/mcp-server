# GetEventsUsageRequest

## Example Usage

```typescript
import { GetEventsUsageRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetEventsUsageRequest = {
  type: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `type`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | The type of event to retrieve. Must be either `received` or `published`.          |
| `from`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The series of data returned starts from this timestamp. Defaults to 24 hours ago. |
| `to`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | The series of data returned ends at this timestamp. Defaults to the current time. |