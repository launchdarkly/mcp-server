# CreateFlagLinkRequest

## Example Usage

```typescript
import { CreateFlagLinkRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateFlagLinkRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  flagLinkPost: {
    key: "flag-link-key-123abc",
    deepLink: "https://example.com/archives/123123123",
    title: "Example link title",
    description: "Example link description",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `projectKey`                                        | *string*                                            | :heavy_check_mark:                                  | The project key                                     |
| `featureFlagKey`                                    | *string*                                            | :heavy_check_mark:                                  | The feature flag key                                |
| `flagLinkPost`                                      | [models.FlagLinkPost](../../models/flaglinkpost.md) | :heavy_check_mark:                                  | N/A                                                 |