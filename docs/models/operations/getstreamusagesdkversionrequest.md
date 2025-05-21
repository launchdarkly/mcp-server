# GetStreamUsageSdkversionRequest

## Example Usage

```typescript
import { GetStreamUsageSdkversionRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetStreamUsageSdkversionRequest = {
  source: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `source`                                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | The source of streaming connections to describe. Must be either `client` or `server`. |