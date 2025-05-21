# GetStreamUsageRequest

## Example Usage

```typescript
import { GetStreamUsageRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetStreamUsageRequest = {
  source: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `source`                                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | The source of streaming connections to describe. Must be either `client` or `server`. |
| `from`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | The series of data returned starts from this timestamp. Defaults to 30 days ago.      |
| `to`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | The series of data returned ends at this timestamp. Defaults to the current time.     |
| `tz`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | The timezone to use for breaks between days when returning daily data.                |