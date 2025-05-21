# UpsertContextKindPayload

## Example Usage

```typescript
import { UpsertContextKindPayload } from "@launchdarkly/mcp-server/models/components";

let value: UpsertContextKindPayload = {
  name: "organization",
  description: "An example context kind for organizations",
  hideInTargeting: false,
  archived: false,
  version: 1,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | The context kind name                                                                       | organization                                                                                |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The context kind description                                                                | An example context kind for organizations                                                   |
| `hideInTargeting`                                                                           | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Alias for archived.                                                                         | false                                                                                       |
| `archived`                                                                                  | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Whether the context kind is archived. Archived context kinds are unavailable for targeting. | false                                                                                       |
| `version`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | The context kind version. If not specified when the context kind is created, defaults to 1. | 1                                                                                           |