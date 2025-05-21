# BigSegmentTarget

## Example Usage

```typescript
import { BigSegmentTarget } from "@launchdarkly/mcp-server";

let value: BigSegmentTarget = {
  userKey: "<value>",
  included: false,
  excluded: false,
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userKey`                                                                                                                                                                               | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | The target key                                                                                                                                                                          |
| `included`                                                                                                                                                                              | *boolean*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                      | Indicates whether the target is included.<br />Included targets are always segment members, regardless of segment rules.                                                                |
| `excluded`                                                                                                                                                                              | *boolean*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                      | Indicates whether the target is excluded.<br />Segment rules bypass excluded targets, so they will never be included based on rules. Excluded targets may still be included explicitly. |