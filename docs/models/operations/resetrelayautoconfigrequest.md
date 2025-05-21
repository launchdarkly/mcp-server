# ResetRelayAutoConfigRequest

## Example Usage

```typescript
import { ResetRelayAutoConfigRequest } from "@launchdarkly/mcp-server/models/operations";

let value: ResetRelayAutoConfigRequest = {
  id: "<value>",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                             | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The Relay Proxy configuration ID                                                                                                                                                 |
| `expiry`                                                                                                                                                                         | *number*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately. |