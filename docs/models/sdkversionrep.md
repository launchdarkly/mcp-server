# SDKVersionRep

## Example Usage

```typescript
import { SDKVersionRep } from "@launchdarkly/mcp-server";

let value: SDKVersionRep = {
  sdk: "<value>",
  version: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `sdk`                            | *string*                         | :heavy_check_mark:               | The SDK name, or "Unknown"       |
| `version`                        | *string*                         | :heavy_check_mark:               | The version number, or "Unknown" |