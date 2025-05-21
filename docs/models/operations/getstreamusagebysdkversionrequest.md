# GetStreamUsageBySDKVersionRequest

## Example Usage

```typescript
import { GetStreamUsageBySDKVersionRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetStreamUsageBySDKVersionRequest = {
  source: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `source`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | The source of streaming connections to describe. Must be either `client` or `server`.    |
| `from`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The series of data returned starts from this timestamp. Defaults to 24 hours ago.        |
| `to`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | The series of data returned ends at this timestamp. Defaults to the current time.        |
| `tz`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | The timezone to use for breaks between days when returning daily data.                   |
| `sdk`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | If included, this filters the returned series to only those that match this SDK name.    |
| `version`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | If included, this filters the returned series to only those that match this SDK version. |