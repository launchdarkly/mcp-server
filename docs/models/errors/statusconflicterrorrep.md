# StatusConflictErrorRep

## Example Usage

```typescript
import { StatusConflictErrorRep } from "@launchdarkly/mcp-server/models/errors";

// No examples available for this model
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `code`                                            | *string*                                          | :heavy_check_mark:                                | Specific error code encountered                   | optimistic_locking_error                          |
| `message`                                         | *string*                                          | :heavy_check_mark:                                | Description of the error                          | Conflict. Optimistic lock error. Try again later. |