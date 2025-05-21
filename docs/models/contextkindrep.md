# ContextKindRep

## Example Usage

```typescript
import { ContextKindRep } from "@launchdarkly/mcp-server";

let value: ContextKindRep = {
  key: "organization-key-123abc",
  name: "Organization",
  description:
    "An example context kind, to enable targeting based on organization",
  version: 4,
  creationDate: 69454,
  lastModified: 171600,
  createdFrom: "<value>",
  hideInTargeting: false,
  archived: false,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `key`                                                                                       | *string*                                                                                    | :heavy_check_mark:                                                                          | The context kind key                                                                        | organization-key-123abc                                                                     |
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | The context kind name                                                                       | Organization                                                                                |
| `description`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | The context kind description                                                                | An example context kind, to enable targeting based on organization                          |
| `version`                                                                                   | *number*                                                                                    | :heavy_check_mark:                                                                          | The context kind version                                                                    | 4                                                                                           |
| `creationDate`                                                                              | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `lastModified`                                                                              | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `lastSeen`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `createdFrom`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `hideInTargeting`                                                                           | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Alias for archived.                                                                         | false                                                                                       |
| `archived`                                                                                  | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Whether the context kind is archived. Archived context kinds are unavailable for targeting. | false                                                                                       |
| `links`                                                                                     | Record<string, [models.Link](../models/link.md)>                                            | :heavy_minus_sign:                                                                          | The location and content type of related resources                                          |                                                                                             |