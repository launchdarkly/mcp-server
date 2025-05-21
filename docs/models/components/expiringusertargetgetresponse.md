# ExpiringUserTargetGetResponse

## Example Usage

```typescript
import { ExpiringUserTargetGetResponse } from "@launchdarkly/mcp-server/models/components";

let value: ExpiringUserTargetGetResponse = {
  items: [
    {
      id: "12ab3c45de678910fgh12345",
      version: 1,
      expirationDate: 793856,
      userKey: "example-user-key",
      targetType: "included",
      variationId: "ce67d625-a8b9-4fb5-a344-ab909d9d4f4d",
      resourceId: {},
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `items`                                                                                  | [components.ExpiringUserTargetItem](../../models/components/expiringusertargetitem.md)[] | :heavy_check_mark:                                                                       | An array of expiring user targets                                                        |
| `links`                                                                                  | Record<string, [components.Link](../../models/components/link.md)>                       | :heavy_minus_sign:                                                                       | The location and content type of related resources                                       |