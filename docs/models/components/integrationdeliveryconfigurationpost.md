# IntegrationDeliveryConfigurationPost

## Example Usage

```typescript
import { IntegrationDeliveryConfigurationPost } from "@launchdarkly/mcp-server/models/components";

let value: IntegrationDeliveryConfigurationPost = {
  on: false,
  config: {
    "key": "<value>",
  },
  tags: [
    "example-tag",
  ],
  name: "Sample integration",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `on`                                                                     | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether the integration configuration is active. Default value is false. | false                                                                    |
| `config`                                                                 | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `tags`                                                                   | *string*[]                                                               | :heavy_minus_sign:                                                       | Tags to associate with the integration                                   | [<br/>"example-tag"<br/>]                                                |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Name to identify the integration                                         | Sample integration                                                       |