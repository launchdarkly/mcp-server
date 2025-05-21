# FailureReasonRep

## Example Usage

```typescript
import { FailureReasonRep } from "@launchdarkly/mcp-server/models/components";

let value: FailureReasonRep = {
  attribute: "projectKey",
  reason: "must be present",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `attribute`                                | *string*                                   | :heavy_check_mark:                         | The attribute that failed validation       | projectKey                                 |
| `reason`                                   | *string*                                   | :heavy_check_mark:                         | The reason the attribute failed validation | must be present                            |