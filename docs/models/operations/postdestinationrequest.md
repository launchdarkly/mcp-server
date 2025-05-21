# PostDestinationRequest

## Example Usage

```typescript
import { PostDestinationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostDestinationRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  destinationPost: {
    name: "example-destination",
    kind: "google-pubsub",
    config: "{\"project\":\"test-prod\",\"topic\":\"ld-pubsub-test-192301\"}",
    on: true,
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `projectKey`                                              | *string*                                                  | :heavy_check_mark:                                        | The project key                                           |
| `environmentKey`                                          | *string*                                                  | :heavy_check_mark:                                        | The environment key                                       |
| `destinationPost`                                         | [models.DestinationPost](../../models/destinationpost.md) | :heavy_check_mark:                                        | N/A                                                       |