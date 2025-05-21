# DefaultClientSideAvailability

## Example Usage

```typescript
import { DefaultClientSideAvailability } from "@launchdarkly/mcp-server";

let value: DefaultClientSideAvailability = {
  usingMobileKey: true,
  usingEnvironmentId: true,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `usingMobileKey`                                    | *boolean*                                           | :heavy_check_mark:                                  | Whether to enable availability for mobile SDKs      | true                                                |
| `usingEnvironmentId`                                | *boolean*                                           | :heavy_check_mark:                                  | Whether to enable availability for client-side SDKs | true                                                |