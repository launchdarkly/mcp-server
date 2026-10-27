# VariationSkill

## Example Usage

```typescript
import { VariationSkill } from "@launchdarkly/mcp-server/models/components";

let value: VariationSkill = {
  key: "key",
  version: 9,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `key`                                | *string*                             | :heavy_check_mark:                   | The key of the attached agent skill. |
| `version`                            | *number*                             | :heavy_check_mark:                   | The pinned skill version.            |