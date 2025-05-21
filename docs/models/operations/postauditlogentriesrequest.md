# PostAuditLogEntriesRequest

## Example Usage

```typescript
import { PostAuditLogEntriesRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostAuditLogEntriesRequest = {
  requestBody: [
    {
      resources: [
        "proj/*:env/*:flag/*;testing-tag",
      ],
      actions: [
        "*",
      ],
      effect: "allow",
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `before`                                                                                                                 | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries returned occurred before the timestamp. |
| `after`                                                                                                                  | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned occurred after the timestamp.   |
| `q`                                                                                                                      | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Text to search for. You can search for the full or partial name of the resource.                                         |
| `limit`                                                                                                                  | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10.                         |
| `requestBody`                                                                                                            | [components.StatementPost](../../models/components/statementpost.md)[]                                                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |