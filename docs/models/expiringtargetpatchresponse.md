# ExpiringTargetPatchResponse

## Example Usage

```typescript
import { ExpiringTargetPatchResponse } from "@launchdarkly/mcp-server";

let value: ExpiringTargetPatchResponse = {
  items: [
    {
      id: "12ab3c45de678910abc12345",
      version: 1,
      expirationDate: 568769,
      contextKind: "user",
      contextKey: "context-key-123abc",
      targetType: "included",
      variationId: "cc4332e2-bd4d-4fe0-b509-dfd2caf8dd73",
      resourceId: {
        environmentKey: "environment-key-123abc",
        key: "segment-key-123abc",
        projectKey: "project-key-123abc",
      },
    },
  ],
  errors: [
    {
      instructionIndex: 1,
      message: "example error message",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [models.ExpiringTarget](../models/expiringtarget.md)[]           | :heavy_check_mark:                                               | A list of the results from each instruction                      |
| `links`                                                          | Record<string, [models.Link](../models/link.md)>                 | :heavy_minus_sign:                                               | The location and content type of related resources               |
| `totalInstructions`                                              | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `successfulInstructions`                                         | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `failedInstructions`                                             | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `errors`                                                         | [models.ExpiringTargetError](../models/expiringtargeterror.md)[] | :heavy_minus_sign:                                               | N/A                                                              |