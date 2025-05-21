# ClientSideAvailabilityPost

## Example Usage

```typescript
import { ClientSideAvailabilityPost } from "@launchdarkly/mcp-server";

let value: ClientSideAvailabilityPost = {
  usingEnvironmentId: true,
  usingMobileKey: true,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `usingEnvironmentId`                                                                 | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether to enable availability for client-side SDKs. Defaults to <code>false</code>. | true                                                                                 |
| `usingMobileKey`                                                                     | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether to enable availability for mobile SDKs. Defaults to <code>true</code>.       | true                                                                                 |