# ExpiringUserTargetPatchResponse

## Example Usage

```typescript
import { ExpiringUserTargetPatchResponse } from "@launchdarkly/mcp-server/models/components";

let value: ExpiringUserTargetPatchResponse = {
  items: [
    {
      id: "12ab3c45de678910fgh12345",
      version: 1,
      expirationDate: 672104,
      userKey: "example-user-key",
      targetType: "included",
      variationId: "ce67d625-a8b9-4fb5-a344-ab909d9d4f4d",
      resourceId: {},
    },
  ],
  totalInstructions: 1,
  successfulInstructions: 1,
  failedInstructions: 0,
  errors: [
    {
      instructionIndex: 1,
      message: "example error message",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `items`                                                                                  | [components.ExpiringUserTargetItem](../../models/components/expiringusertargetitem.md)[] | :heavy_check_mark:                                                                       | An array of expiring user targets                                                        |                                                                                          |
| `links`                                                                                  | Record<string, [components.Link](../../models/components/link.md)>                       | :heavy_minus_sign:                                                                       | The location and content type of related resources                                       |                                                                                          |
| `totalInstructions`                                                                      | *number*                                                                                 | :heavy_minus_sign:                                                                       | The total count of instructions sent in the PATCH request                                | 1                                                                                        |
| `successfulInstructions`                                                                 | *number*                                                                                 | :heavy_minus_sign:                                                                       | The total count of successful instructions sent in the PATCH request                     | 1                                                                                        |
| `failedInstructions`                                                                     | *number*                                                                                 | :heavy_minus_sign:                                                                       | The total count of the failed instructions sent in the PATCH request                     | 0                                                                                        |
| `errors`                                                                                 | [components.ExpiringTargetError](../../models/components/expiringtargeterror.md)[]       | :heavy_minus_sign:                                                                       | An array of error messages for the failed instructions                                   |                                                                                          |