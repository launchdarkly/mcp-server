# ExpiringTargetError

## Example Usage

```typescript
import { ExpiringTargetError } from "@launchdarkly/mcp-server";

let value: ExpiringTargetError = {
  instructionIndex: 1,
  message: "example error message",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `instructionIndex`                                          | *number*                                                    | :heavy_check_mark:                                          | The index of the PATCH instruction where the error occurred | 1                                                           |
| `message`                                                   | *string*                                                    | :heavy_check_mark:                                          | The error message related to a failed PATCH instruction     | example error message                                       |