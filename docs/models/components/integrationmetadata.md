# IntegrationMetadata

## Example Usage

```typescript
import { IntegrationMetadata } from "@launchdarkly/mcp-server/models/components";

let value: IntegrationMetadata = {
  externalId: "<id>",
  externalStatus: {
    display: "<value>",
    value: "<value>",
  },
  externalUrl: "https://insecure-reasoning.net",
  lastChecked: 854557,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `externalId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `externalStatus`                                                             | [components.IntegrationStatus](../../models/components/integrationstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `externalUrl`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `lastChecked`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |