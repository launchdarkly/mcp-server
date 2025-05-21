# MetricEventDefaultRep

## Example Usage

```typescript
import { MetricEventDefaultRep } from "@launchdarkly/mcp-server";

let value: MetricEventDefaultRep = {
  value: 0,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                                               | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | Whether to disable defaulting missing unit events when calculating results. Defaults to false                                            |                                                                                                                                          |
| `value`                                                                                                                                  | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The default value applied to missing unit events. Set to 0 when <code>disabled</code> is false. No other values are currently supported. | 0                                                                                                                                        |