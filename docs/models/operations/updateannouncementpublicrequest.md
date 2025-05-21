# UpdateAnnouncementPublicRequest

## Example Usage

```typescript
import { UpdateAnnouncementPublicRequest } from "@launchdarkly/mcp-server/models/operations";

let value: UpdateAnnouncementPublicRequest = {
  announcementId: "1234567890",
  requestBody: [
    {
      op: "replace",
      path: "/exampleField",
      value: "new example value",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `announcementId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | 1234567890                                                                                       |
| `requestBody`                                                                                    | [components.AnnouncementPatchOperation](../../models/components/announcementpatchoperation.md)[] | :heavy_check_mark:                                                                               | Update announcement request body                                                                 |                                                                                                  |