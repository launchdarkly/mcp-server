# PostEnvironmentRequest

## Example Usage

```typescript
import { PostEnvironmentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostEnvironmentRequest = {
  projectKey: "<value>",
  environmentPost: {
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
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectKey`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | The project key                                                          |
| `environmentPost`                                                        | [components.EnvironmentPost](../../models/components/environmentpost.md) | :heavy_check_mark:                                                       | N/A                                                                      |