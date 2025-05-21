# UserSegmentRule

## Example Usage

```typescript
import { UserSegmentRule } from "@launchdarkly/mcp-server/models/components";

let value: UserSegmentRule = {
  clauses: [
    {
      attribute: "<value>",
      op: "<value>",
      values: [
        "<value>",
      ],
      negate: false,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `clauses`                                                | [components.Clause](../../models/components/clause.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `weight`                                                 | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `rolloutContextKind`                                     | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `bucketBy`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `description`                                            | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |