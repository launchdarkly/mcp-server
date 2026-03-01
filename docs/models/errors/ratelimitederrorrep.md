# RateLimitedErrorRep

## Example Usage

```typescript
import { RateLimitedErrorRep } from "@launchdarkly/mcp-server/models/errors";

// No examples available for this model
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `code`                                               | *string*                                             | :heavy_check_mark:                                   | Specific error code encountered                      | rate_limited                                         |
| `message`                                            | *string*                                             | :heavy_check_mark:                                   | Description of the error                             | You've exceeded the API rate limit. Try again later. |