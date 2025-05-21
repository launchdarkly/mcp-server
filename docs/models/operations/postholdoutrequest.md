# PostHoldoutRequest

## Example Usage

```typescript
import { PostHoldoutRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostHoldoutRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  holdoutPostRequest: {
    name: "holdout-one-name",
    key: "holdout-key",
    description: "My holdout-one description",
    randomizationunit: "user",
    attributes: [
      "country",
      "device",
      "os",
    ],
    holdoutamount: "10",
    primarymetrickey: "metric-key-123abc",
    metrics: [
      {
        key: "metric-key-123abc",
        isGroup: true,
      },
    ],
    prerequisiteflagkey: "flag-key-123abc",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `projectKey`                                                    | *string*                                                        | :heavy_check_mark:                                              | The project key                                                 |
| `environmentKey`                                                | *string*                                                        | :heavy_check_mark:                                              | The environment key                                             |
| `holdoutPostRequest`                                            | [models.HoldoutPostRequest](../../models/holdoutpostrequest.md) | :heavy_check_mark:                                              | N/A                                                             |