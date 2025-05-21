# DependentFlagEnvironment

## Example Usage

```typescript
import { DependentFlagEnvironment } from "@launchdarkly/mcp-server/models/components";

let value: DependentFlagEnvironment = {
  name: "Example environment",
  key: "environment-key-123abc",
  links: {
    "key": {},
  },
  site: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The environment name                                               | Example environment                                                |
| `key`                                                              | *string*                                                           | :heavy_check_mark:                                                 | The environment key                                                | environment-key-123abc                                             |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_check_mark:                                                 | The location and content type of related resources                 |                                                                    |
| `site`                                                             | [components.Link](../../models/components/link.md)                 | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |