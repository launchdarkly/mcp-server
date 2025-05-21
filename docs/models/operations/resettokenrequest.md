# ResetTokenRequest

## Example Usage

```typescript
import { ResetTokenRequest } from "@launchdarkly/mcp-server/models/operations";

let value: ResetTokenRequest = {
  id: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The ID of the access token to update                                                                                                     |
| `expiry`                                                                                                                                 | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately. |