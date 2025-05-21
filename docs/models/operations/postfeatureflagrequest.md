# PostFeatureFlagRequest

## Example Usage

```typescript
import { PostFeatureFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostFeatureFlagRequest = {
  projectKey: "<value>",
  featureFlagBody: {
    name: "My flag",
    key: "flag-key-123abc",
    description: "This flag controls the example widgets",
    clientSideAvailability: {
      usingEnvironmentId: true,
      usingMobileKey: true,
    },
    variations: [
      {
        value: true,
      },
      {
        value: false,
      },
    ],
    temporary: false,
    tags: [
      "example-tag",
    ],
    customProperties: {
      "key": {
        name: "Jira issues",
        value: [
          "is-123",
          "is-456",
        ],
      },
    },
    defaults: {
      onVariation: 0,
      offVariation: 1,
    },
    purpose: "migration",
    maintainerId: "12ab3c45de678910fgh12345",
    maintainerTeamKey: "team-1",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                       | The project key                                                                                                                                                                                                                                          |
| `clone`                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | The key of the feature flag to be cloned. The key identifies the flag in your code. For example, setting `clone=flagKey` copies the full targeting configuration for all environments, including `on/off` state, from the original flag to the new flag. |
| `featureFlagBody`                                                                                                                                                                                                                                        | [models.FeatureFlagBody](../../models/featureflagbody.md)                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |