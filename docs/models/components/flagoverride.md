# FlagOverride

Flag override

## Example Usage

```typescript
import { FlagOverride } from "@launchdarkly/mcp-server/models/components";

let value: FlagOverride = {
  value: 7850.1,
  override: false,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `value`                                                                       | *components.FlagValueUnion*                                                   | :heavy_check_mark:                                                            | value of a feature flag variation                                             |
| `override`                                                                    | *boolean*                                                                     | :heavy_check_mark:                                                            | whether or not this is an overridden value or one from the source environment |