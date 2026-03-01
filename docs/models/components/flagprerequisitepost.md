# FlagPrerequisitePost

## Example Usage

```typescript
import { FlagPrerequisitePost } from "@launchdarkly/mcp-server/models/components";

let value: FlagPrerequisitePost = {
  key: "<key>",
  variationId: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `key`                                      | *string*                                   | :heavy_check_mark:                         | Flag key of the prerequisite flag          |
| `variationId`                              | *string*                                   | :heavy_check_mark:                         | ID of a variation of the prerequisite flag |