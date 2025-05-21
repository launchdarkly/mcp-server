# EnvironmentPost

## Example Usage

```typescript
import { EnvironmentPost } from "@launchdarkly/mcp-server";

let value: EnvironmentPost = {
  name: "My Environment",
  key: "environment-key-123abc",
  color: "F5A623",
  defaultTtl: 5,
  secureMode: true,
  defaultTrackEvents: false,
  confirmChanges: false,
  requireComments: false,
  tags: [
    "ops",
  ],
  critical: true,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | A human-friendly name for the new environment                                                       | My Environment                                                                                      |
| `key`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | A project-unique key for the new environment                                                        | environment-key-123abc                                                                              |
| `color`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | A color to indicate this environment in the UI                                                      | F5A623                                                                                              |
| `defaultTtl`                                                                                        | *number*                                                                                            | :heavy_minus_sign:                                                                                  | The default time (in minutes) that the PHP SDK can cache feature flag rules locally                 | 5                                                                                                   |
| `secureMode`                                                                                        | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Ensures that one end user of the client-side SDK cannot inspect the variations for another end user | true                                                                                                |
| `defaultTrackEvents`                                                                                | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Enables tracking detailed information for new flags by default                                      | false                                                                                               |
| `confirmChanges`                                                                                    | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Requires confirmation for all flag and segment changes via the UI in this environment               | false                                                                                               |
| `requireComments`                                                                                   | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Requires comments for all flag and segment changes via the UI in this environment                   | false                                                                                               |
| `tags`                                                                                              | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | Tags to apply to the new environment                                                                | [<br/>"ops"<br/>]                                                                                   |
| `source`                                                                                            | [models.SourceEnv](../models/sourceenv.md)                                                          | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `critical`                                                                                          | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether the environment is critical                                                                 | true                                                                                                |