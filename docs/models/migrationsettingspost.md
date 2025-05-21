# MigrationSettingsPost

## Example Usage

```typescript
import { MigrationSettingsPost } from "@launchdarkly/mcp-server";

let value: MigrationSettingsPost = {
  stageCount: 333406,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contextKind`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Context kind for a migration with 6 stages, where data is being moved |
| `stageCount`                                                          | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |