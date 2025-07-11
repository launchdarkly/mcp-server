# AiConfigsMetricEventDefaultRep

## Example Usage

```typescript
import { AiConfigsMetricEventDefaultRep } from "@launchdarkly/mcp-server/models/components";

let value: AiConfigsMetricEventDefaultRep = {
  disabled: true,
  value: 0,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                                               | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | Whether to disable defaulting missing unit events when calculating results. Defaults to false                                            |                                                                                                                                          |
| `value`                                                                                                                                  | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The default value applied to missing unit events. Set to 0 when <code>disabled</code> is false. No other values are currently supported. | 0                                                                                                                                        |