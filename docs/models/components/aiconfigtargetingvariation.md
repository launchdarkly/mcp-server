# AIConfigTargetingVariation

## Example Usage

```typescript
import { AIConfigTargetingVariation } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingVariation = {
  id: "_id",
  description: "description",
  name: "name",
  value: 5152.63,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The variation ID                             |
| `description`                                | *string*                                     | :heavy_check_mark:                           | A description of the variation               |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | The variation name                           |
| `value`                                      | *components.AIConfigTargetingVariationValue* | :heavy_check_mark:                           | The variation value                          |