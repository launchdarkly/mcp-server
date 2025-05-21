# FeatureFlagStatus

## Example Usage

```typescript
import { FeatureFlagStatus } from "@launchdarkly/mcp-server";

let value: FeatureFlagStatus = {
  name: "inactive",
  lastRequested: new Date("2020-02-05T18:17:01.514Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | [models.FeatureFlagStatusName](../models/featureflagstatusname.md)                            | :heavy_check_mark:                                                                            | Status of the flag                                                                            | inactive                                                                                      |
| `lastRequested`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of last time flag was requested                                                     | 2020-02-05T18:17:01.514Z                                                                      |
| `default`                                                                                     | *any*                                                                                         | :heavy_minus_sign:                                                                            | Default value seen from code                                                                  |                                                                                               |