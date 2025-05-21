# BulkEditMembersRep

## Example Usage

```typescript
import { BulkEditMembersRep } from "@launchdarkly/mcp-server";

let value: BulkEditMembersRep = {
  members: [
    "1234a56b7c89d012345e678f",
  ],
  errors: [
    {
      "507f1f77bcf86cd799439011": "you cannot modify your own role",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `members`                                                             | *string*[]                                                            | :heavy_minus_sign:                                                    | A list of members IDs of the members who were successfully updated.   | [<br/>"1234a56b7c89d012345e678f"<br/>]                                |
| `errors`                                                              | Record<string, *string*>[]                                            | :heavy_minus_sign:                                                    | A list of member IDs and errors for the members whose updates failed. | [<br/>{<br/>"507f1f77bcf86cd799439011": "you cannot modify your own role"<br/>}<br/>] |