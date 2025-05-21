# UpsertResponseRep

## Example Usage

```typescript
import { UpsertResponseRep } from "@launchdarkly/mcp-server";

let value: UpsertResponseRep = {
  status: "success",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `status`                                           | *string*                                           | :heavy_minus_sign:                                 | The status of the create or update operation       | success                                            |
| `links`                                            | Record<string, [models.Link](../models/link.md)>   | :heavy_minus_sign:                                 | The location and content type of related resources |                                                    |