# WebhookPost

## Example Usage

```typescript
import { WebhookPost } from "@launchdarkly/mcp-server/models/components";

let value: WebhookPost = {
  name: "Example hook",
  url: "http://www.example.com",
  secret: "frobozz",
  statements: [
    {
      resources: [
        "proj/*:env/*:flag/*;testing-tag",
      ],
      actions: [
        "*",
      ],
      effect: "allow",
    },
  ],
  sign: true,
  on: true,
  tags: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A human-readable name for your webhook                                                                       | Example hook                                                                                                 |
| `url`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The URL of the remote webhook                                                                                | http://www.example.com                                                                                       |
| `secret`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | If sign is true, and the secret attribute is omitted, LaunchDarkly automatically generates a secret for you. | frobozz                                                                                                      |
| `statements`                                                                                                 | [components.StatementPost](../../models/components/statementpost.md)[]                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `sign`                                                                                                       | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | If sign is false, the webhook does not include a signature header, and the secret can be omitted.            | true                                                                                                         |
| `on`                                                                                                         | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether or not this webhook is enabled.                                                                      | true                                                                                                         |
| `tags`                                                                                                       | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | List of tags for this webhook                                                                                | []                                                                                                           |