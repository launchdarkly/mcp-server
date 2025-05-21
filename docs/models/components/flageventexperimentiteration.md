# FlagEventExperimentIteration

## Example Usage

```typescript
import { FlagEventExperimentIteration } from "@launchdarkly/mcp-server/models/components";

let value: FlagEventExperimentIteration = {
  id: "65baa44ecc4b5bce113bb4f7",
  status: "<value>",
  startedAt: 487407,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | The experiment iteration ID                                        | 65baa44ecc4b5bce113bb4f7                                           |
| `status`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `startedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `endedAt`                                                          | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_minus_sign:                                                 | The location and content type of related resources                 |                                                                    |