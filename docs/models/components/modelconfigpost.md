# ModelConfigPost

## Example Usage

```typescript
import { ModelConfigPost } from "@launchdarkly/mcp-server/models/components";

let value: ModelConfigPost = {
  name: "name",
  key: "key",
  id: "id",
  icon: "icon",
  provider: "provider",
  params: {},
  customParams: {},
  tags: [
    "tags",
    "tags",
  ],
  costPerInputToken: 0.8008281904610115,
  costPerOutputToken: 6.027456183070403,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Human readable name of the model                                                                 |
| `key`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique key for the model                                                                         |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | Identifier for the model, for use with third party providers                                     |
| `icon`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | Icon for the model                                                                               |
| `provider`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | Provider for the model                                                                           |
| `params`                                                                                         | [components.ModelConfigPostParams](../../models/components/modelconfigpostparams.md)             | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `customParams`                                                                                   | [components.ModelConfigPostCustomParams](../../models/components/modelconfigpostcustomparams.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `tags`                                                                                           | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `costPerInputToken`                                                                              | *number*                                                                                         | :heavy_minus_sign:                                                                               | Cost per input token in USD                                                                      |
| `costPerOutputToken`                                                                             | *number*                                                                                         | :heavy_minus_sign:                                                                               | Cost per output token in USD                                                                     |