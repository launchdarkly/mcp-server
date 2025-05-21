# UpdateLayerRequest

## Example Usage

```typescript
import { UpdateLayerRequest } from "@launchdarkly/mcp-server/models/operations";

let value: UpdateLayerRequest = {
  projectKey: "<value>",
  layerKey: "<value>",
  layerPatchInput: {
    comment: "Optional comment",
    environmentKey: "production",
    instructions: [
      {
        "key": "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `projectKey`                                              | *string*                                                  | :heavy_check_mark:                                        | The project key                                           |
| `layerKey`                                                | *string*                                                  | :heavy_check_mark:                                        | The layer key                                             |
| `layerPatchInput`                                         | [models.LayerPatchInput](../../models/layerpatchinput.md) | :heavy_check_mark:                                        | N/A                                                       |