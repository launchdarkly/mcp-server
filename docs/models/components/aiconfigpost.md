# AIConfigPost

## Example Usage

```typescript
import { AIConfigPost } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigPost = {
  key: "key",
  maintainerId: "maintainerId",
  maintainerTeamKey: "maintainerTeamKey",
  name: "name",
  tags: [
    "tags",
    "tags",
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `key`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `maintainerId`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `maintainerTeamKey`                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `mode`                                                                     | [components.AIConfigPostMode](../../models/components/aiconfigpostmode.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `tags`                                                                     | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |