# LayerPatchInput

## Example Usage

```typescript
import { LayerPatchInput } from "@launchdarkly/mcp-server";

let value: LayerPatchInput = {
  comment: "Optional comment",
  environmentKey: "production",
  instructions: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `comment`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Optional comment describing the update                                                                                   | Optional comment                                                                                                         |
| `environmentKey`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The environment key used for making environment specific updates. For example, updating the reservation of an experiment | production                                                                                                               |
| `instructions`                                                                                                           | Record<string, *any*>[]                                                                                                  | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |