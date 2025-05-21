# GetInsightGroupRequest

## Example Usage

```typescript
import { GetInsightGroupRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetInsightGroupRequest = {
  insightGroupKey: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `insightGroupKey`                | *string*                         | :heavy_check_mark:               | The insight group key            |
| `expand`                         | *string*                         | :heavy_minus_sign:               | Options: `scores`, `environment` |