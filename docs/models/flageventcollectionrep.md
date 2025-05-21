# FlagEventCollectionRep

## Example Usage

```typescript
import { FlagEventCollectionRep } from "@launchdarkly/mcp-server";

let value: FlagEventCollectionRep = {
  totalCount: 1200,
  items: [
    {
      id: "e3b2b0e0-9e9b-4c9a-8e9a-0e0e0e0e0e0e",
      projectId: "65baa44ecc4b5bce113bb4f7",
      projectKey: "default",
      environmentId: "65baa44ecc4b5bce113bb4f7",
      environmentKey: "production",
      flagKey: "enable-new-payment-method",
      eventType: "<value>",
      eventTime: 285886,
      description: "Targeting rule enabled",
      auditLogEntryId: "e3b2b0e0-9e9b-4c9a-8e9a-0e0e0e0e0e0e",
      member: {
        id: "65baa44ecc4b5bce113bb4f7",
        email: "test@launchdarkly.com",
        firstName: "Bill",
        lastName: "Toy",
      },
      impact: {
        size: "medium",
        percentage: 50,
        evaluationsSummary: {
          variations: [
            {
              value: "true",
              before: 1000,
              after: 500,
            },
          ],
        },
      },
      experiments: {
        totalCount: 1,
        items: [
          {
            key: "experiment-1",
            name: "Experiment 1",
            iteration: {
              id: "65baa44ecc4b5bce113bb4f7",
              status: "<value>",
              startedAt: 225276,
            },
          },
        ],
      },
    },
  ],
  links: {
    "next": {
      href:
        "/api/v2/engineering-insights/flag-events?after=a4290006-1fd1-4ca5-acf7-9f31fac61cf5",
      type: "application/json",
    },
    "self": {
      href: "/api/v2/engineering-insights/flag-events",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                    | The total number of flag events                                                                                                                                                                                                       | 1200                                                                                                                                                                                                                                  |
| `items`                                                                                                                                                                                                                               | [models.FlagEventRep](../models/flageventrep.md)[]                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                    | A list of flag events                                                                                                                                                                                                                 |                                                                                                                                                                                                                                       |
| `links`                                                                                                                                                                                                                               | Record<string, [models.Link](../models/link.md)>                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                    | The location and content type of related resources                                                                                                                                                                                    | {<br/>"next": {<br/>"href": "/api/v2/engineering-insights/flag-events?after=a4290006-1fd1-4ca5-acf7-9f31fac61cf5",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/engineering-insights/flag-events",<br/>"type": "application/json"<br/>}<br/>} |