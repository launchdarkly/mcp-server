# StaleFlagData

## Example Usage

```typescript
import { StaleFlagData } from "@launchdarkly/mcp-server/models/components";

let value: StaleFlagData = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `readyForCodeRemoval`                                                    | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether the flag is ready for code removal                               |
| `readyToArchive`                                                         | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether the flag is ready to be archived                                 |
| `cleanupId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | If a third-party system helps clean up the flag, the ID from that system |