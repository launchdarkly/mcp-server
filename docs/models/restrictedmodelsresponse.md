# RestrictedModelsResponse

## Example Usage

```typescript
import { RestrictedModelsResponse } from "@launchdarkly/mcp-server";

let value: RestrictedModelsResponse = {
  successes: [
    "successes",
    "successes",
  ],
  errors: [
    {
      key: "key",
      message: "message",
      code: 0,
    },
    {
      key: "key",
      message: "message",
      code: 0,
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `successes`                                                        | *string*[]                                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `errors`                                                           | [models.RestrictedModelError](../models/restrictedmodelerror.md)[] | :heavy_check_mark:                                                 | N/A                                                                |