# CreateLayerRequest

## Example Usage

```typescript
import { CreateLayerRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateLayerRequest = {
  projectKey: "<value>",
  layerPost: {
    key: "checkout-flow",
    name: "Checkout Flow",
    description:
      "yowza gee mountain strict adaptation barracks private once at what",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `projectKey`                                                 | *string*                                                     | :heavy_check_mark:                                           | The project key                                              |
| `layerPost`                                                  | [components.LayerPost](../../models/components/layerpost.md) | :heavy_check_mark:                                           | N/A                                                          |