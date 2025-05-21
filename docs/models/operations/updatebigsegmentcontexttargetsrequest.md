# UpdateBigSegmentContextTargetsRequest

## Example Usage

```typescript
import { UpdateBigSegmentContextTargetsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: UpdateBigSegmentContextTargetsRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  segmentKey: "<value>",
  segmentUserState: {},
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `projectKey`                                                | *string*                                                    | :heavy_check_mark:                                          | The project key                                             |
| `environmentKey`                                            | *string*                                                    | :heavy_check_mark:                                          | The environment key                                         |
| `segmentKey`                                                | *string*                                                    | :heavy_check_mark:                                          | The segment key                                             |
| `segmentUserState`                                          | [models.SegmentUserState](../../models/segmentuserstate.md) | :heavy_check_mark:                                          | N/A                                                         |