# ValidationFailedErrorRep

## Example Usage

```typescript
import { ValidationFailedErrorRep } from "@launchdarkly/mcp-server/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | Specific error code encountered                                              | invalid_request                                                              |
| `message`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Description of the error                                                     | validation failed                                                            |
| `errors`                                                                     | [components.FailureReasonRep](../../models/components/failurereasonrep.md)[] | :heavy_check_mark:                                                           | List of validation errors                                                    |                                                                              |