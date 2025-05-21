# LayerCollectionRep

## Example Usage

```typescript
import { LayerCollectionRep } from "@launchdarkly/mcp-server";

let value: LayerCollectionRep = {
  items: [
    {
      key: "checkout-flow",
      name: "Checkout Flow",
      description: "The checkout flow for the application",
      createdAt: 383364,
      randomizationUnit: "user",
      environments: {
        "key": {
          reservations: [
            {
              experimentKey: "checkout-flow-experiment",
              flagKey: "checkout-flow-flag",
              reservationPercent: 20,
            },
          ],
        },
      },
    },
  ],
  totalCount: 60712,
  links: {
    "self": {
      href: "/api/v2/projects/my-project/layers",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `items`                                                                                  | [models.LayerRep](../models/layerrep.md)[]                                               | :heavy_check_mark:                                                                       | The layers in the project                                                                |                                                                                          |
| `totalCount`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | The total number of layers in the project                                                |                                                                                          |
| `links`                                                                                  | Record<string, [models.Link](../models/link.md)>                                         | :heavy_check_mark:                                                                       | The location and content type of related resources                                       | {<br/>"self": {<br/>"href": "/api/v2/projects/my-project/layers",<br/>"type": "application/json"<br/>}<br/>} |