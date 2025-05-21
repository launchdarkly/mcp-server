# Target

## Example Usage

```typescript
import { Target } from "@launchdarkly/mcp-server";

let value: Target = {
  values: [
    "<value>",
  ],
  variation: 970406,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `values`                                                                                              | *string*[]                                                                                            | :heavy_check_mark:                                                                                    | A list of the keys for targets that will receive this variation because of individual targeting       |
| `variation`                                                                                           | *number*                                                                                              | :heavy_check_mark:                                                                                    | The index, from the array of variations for this flag, of the variation to serve this list of targets |
| `contextKind`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The context kind of the individual target                                                             |