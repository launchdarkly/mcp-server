# ReleaseProgression

## Example Usage

```typescript
import { ReleaseProgression } from "@launchdarkly/mcp-server/models/components";

let value: ReleaseProgression = {
  createdAt: 932169,
  flagKey: "flag-key-123abc",
  activePhaseId: "1234a56b7c89d012345e678f",
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `flagKey`                                                          | *string*                                                           | :heavy_check_mark:                                                 | The flag key                                                       | flag-key-123abc                                                    |
| `activePhaseId`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the currently active release phase                       | 1234a56b7c89d012345e678f                                           |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_check_mark:                                                 | The location and content type of related resources                 |                                                                    |