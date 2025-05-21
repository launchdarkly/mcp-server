# TokenSummary

## Example Usage

```typescript
import { TokenSummary } from "@launchdarkly/mcp-server";

let value: TokenSummary = {
  name: "DevOps token",
  ending: "2345",
  serviceToken: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `links`                                          | Record<string, [models.Link](../models/link.md)> | :heavy_minus_sign:                               | N/A                                              |                                                  |
| `id`                                             | *string*                                         | :heavy_minus_sign:                               | N/A                                              |                                                  |
| `name`                                           | *string*                                         | :heavy_minus_sign:                               | The name of the token                            | DevOps token                                     |
| `ending`                                         | *string*                                         | :heavy_minus_sign:                               | The last few characters of the token             | 2345                                             |
| `serviceToken`                                   | *boolean*                                        | :heavy_minus_sign:                               | Whether this is a service token                  | false                                            |