# InitiatorRep

## Example Usage

```typescript
import { InitiatorRep } from "@launchdarkly/mcp-server";

let value: InitiatorRep = {
  name: "Bob Loblaw",
  email: "ariel@acme.com",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The name of the member who initiated the export          | Bob Loblaw                                               |
| `email`                                                  | *string*                                                 | :heavy_minus_sign:                                       | The email address of the member who initiated the export | ariel@acme.com                                           |