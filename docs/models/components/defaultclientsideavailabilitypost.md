# DefaultClientSideAvailabilityPost

## Example Usage

```typescript
import { DefaultClientSideAvailabilityPost } from "@launchdarkly/mcp-server/models/components";

let value: DefaultClientSideAvailabilityPost = {
  usingEnvironmentId: true,
  usingMobileKey: true,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `usingEnvironmentId`                                 | *boolean*                                            | :heavy_check_mark:                                   | Whether to enable availability for client-side SDKs. | true                                                 |
| `usingMobileKey`                                     | *boolean*                                            | :heavy_check_mark:                                   | Whether to enable availability for mobile SDKs.      | true                                                 |