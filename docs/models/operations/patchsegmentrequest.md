# PatchSegmentRequest

## Example Usage

```typescript
import { PatchSegmentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchSegmentRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  segmentKey: "<value>",
  patchWithComment: {
    patch: [
      {
        op: "replace",
        path: "/exampleField",
        value: "new example value",
      },
    ],
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `projectKey`                                                | *string*                                                    | :heavy_check_mark:                                          | The project key                                             |
| `environmentKey`                                            | *string*                                                    | :heavy_check_mark:                                          | The environment key                                         |
| `segmentKey`                                                | *string*                                                    | :heavy_check_mark:                                          | The segment key                                             |
| `patchWithComment`                                          | [models.PatchWithComment](../../models/patchwithcomment.md) | :heavy_check_mark:                                          | N/A                                                         |