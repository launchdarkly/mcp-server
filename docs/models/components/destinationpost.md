# DestinationPost

## Example Usage

```typescript
import { DestinationPost } from "@launchdarkly/mcp-server/models/components";

let value: DestinationPost = {
  name: "example-destination",
  kind: "google-pubsub",
  config: "{\"project\":\"test-prod\",\"topic\":\"ld-pubsub-test-192301\"}",
  on: true,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `name`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | A human-readable name for your Data Export destination                                | example-destination                                                                   |
| `kind`                                                                                | [components.DestinationPostKind](../../models/components/destinationpostkind.md)      | :heavy_minus_sign:                                                                    | The type of Data Export destination                                                   | google-pubsub                                                                         |
| `config`                                                                              | *any*                                                                                 | :heavy_minus_sign:                                                                    | An object with the configuration parameters required for the destination type         | {"project":"test-prod","topic":"ld-pubsub-test-192301"}                               |
| `on`                                                                                  | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Whether the export is on. Displayed as the integration status in the LaunchDarkly UI. | true                                                                                  |