# FlagMigrationSettingsRep

## Example Usage

```typescript
import { FlagMigrationSettingsRep } from "@launchdarkly/mcp-server";

let value: FlagMigrationSettingsRep = {
  contextKind: "device",
  stageCount: 6,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contextKind`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The context kind targeted by this migration flag. Only applicable for six-stage migrations. | device                                                                                      |
| `stageCount`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | The number of stages for this migration flag                                                | 6                                                                                           |