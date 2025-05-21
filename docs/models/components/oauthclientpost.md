# OauthClientPost

## Example Usage

```typescript
import { OauthClientPost } from "@launchdarkly/mcp-server/models/components";

let value: OauthClientPost = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The name of your new LaunchDarkly OAuth 2.0 client.                                                                              |
| `redirectUri`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The redirect URI for your new OAuth 2.0 application. This should be an absolute URL conforming with the standard HTTPS protocol. |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Description of your OAuth 2.0 client.                                                                                            |