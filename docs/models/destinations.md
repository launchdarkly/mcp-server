# Destinations

## Example Usage

```typescript
import { Destinations } from "@launchdarkly/mcp-server";

let value: Destinations = {
  links: {
    "self": {
      href: "/api/v2/destinations",
      type: "application/json",
    },
  },
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `links`                                                                    | Record<string, [models.Link](../models/link.md)>                           | :heavy_minus_sign:                                                         | The location and content type of related resources                         | {<br/>"self": {<br/>"href": "/api/v2/destinations",<br/>"type": "application/json"<br/>}<br/>} |
| `items`                                                                    | [models.Destination](../models/destination.md)[]                           | :heavy_minus_sign:                                                         | An array of Data Export destinations                                       |                                                                            |