# ExpiringTargetGetResponse

## Example Usage

```typescript
import { ExpiringTargetGetResponse } from "@launchdarkly/mcp-server";

let value: ExpiringTargetGetResponse = {
  items: [
    {
      id: "12ab3c45de678910abc12345",
      version: 1,
      expirationDate: 509541,
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
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `items`                                                | [models.ExpiringTarget](../models/expiringtarget.md)[] | :heavy_check_mark:                                     | A list of expiring targets                             |
| `links`                                                | Record<string, [models.Link](../models/link.md)>       | :heavy_minus_sign:                                     | The location and content type of related resources     |