# Destination

## Example Usage

```typescript
import { Destination } from "@launchdarkly/mcp-server/models/components";

let value: Destination = {
  id: "610addeadbeefaa86ec9a7d4",
  links: {
    "parent": {
      href: "/api/v2/destinations",
      type: "application/json",
    },
    "self": {
      href:
        "/api/v2/destinations/my-project/my-environment/610addeadbeefaa86ec9a7d4",
      type: "application/json",
    },
  },
  name: "example-destination",
  kind: "google-pubsub",
  version: 1,
  config: "{\"project\":\"test-prod\",\"topic\":\"ld-pubsub-test-192301\"}",
  on: true,
  access: {
    denied: [
      {
        action: "<value>",
        reason: {
          resources: [
            "proj/*:env/*;qa_*:/flag/*",
          ],
          actions: [
            "*",
          ],
          effect: "allow",
        },
      },
    ],
    allowed: [
      {
        action: "<value>",
        reason: {
          resources: [
            "proj/*:env/*;qa_*:/flag/*",
          ],
          actions: [
            "*",
          ],
          effect: "allow",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             | Example                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | The ID of this Data Export destination                                                                                                                                                                  | 610addeadbeefaa86ec9a7d4                                                                                                                                                                                |
| `links`                                                                                                                                                                                                 | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                      | The location and content type of related resources                                                                                                                                                      | {<br/>"parent": {<br/>"href": "/api/v2/destinations",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/destinations/my-project/my-environment/610addeadbeefaa86ec9a7d4",<br/>"type": "application/json"<br/>}<br/>} |
| `name`                                                                                                                                                                                                  | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | A human-readable name for your Data Export destination                                                                                                                                                  | example-destination                                                                                                                                                                                     |
| `kind`                                                                                                                                                                                                  | [components.DestinationKind](../../models/components/destinationkind.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | The type of Data Export destination                                                                                                                                                                     | google-pubsub                                                                                                                                                                                           |
| `version`                                                                                                                                                                                               | *number*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     | 1                                                                                                                                                                                                       |
| `config`                                                                                                                                                                                                | *any*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                      | An object with the configuration parameters required for the destination type                                                                                                                           | {"project":"test-prod","topic":"ld-pubsub-test-192301"}                                                                                                                                                 |
| `on`                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                      | Whether the export is on, that is, the status of the integration                                                                                                                                        | true                                                                                                                                                                                                    |
| `access`                                                                                                                                                                                                | [components.Access](../../models/components/access.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |