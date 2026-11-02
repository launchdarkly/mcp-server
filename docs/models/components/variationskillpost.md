# VariationSkillPost

## Example Usage

```typescript
import { VariationSkillPost } from "@launchdarkly/mcp-server/models/components";

let value: VariationSkillPost = {
  key: "key",
  version: 1,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `key`                                 | *string*                              | :heavy_check_mark:                    | The key of the agent skill to attach. |
| `version`                             | *number*                              | :heavy_check_mark:                    | The version of the skill to use.      |