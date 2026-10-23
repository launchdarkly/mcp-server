# EventFilter

## Example Usage

```typescript
import { EventFilter } from "@launchdarkly/mcp-server/models/components";

let value: EventFilter = {
  type: "contextAttribute",
  attribute: "country",
  op: "<value>",
  values: [
    "JP",
  ],
  contextKind: "user",
  negate: false,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Filter type. One of [contextAttribute, eventProperty, group]                                                           | contextAttribute                                                                                                       |
| `attribute`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | If not a group node, the context attribute name or event property name to filter on                                    | country                                                                                                                |
| `op`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `values`                                                                                                               | *any*[]                                                                                                                | :heavy_check_mark:                                                                                                     | The context attribute / event property values or group member nodes. Numeric values must not exceed 14 decimal places. | [<br/>"JP"<br/>]                                                                                                       |
| `contextKind`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | For context attribute filters, the context kind.                                                                       | user                                                                                                                   |
| `negate`                                                                                                               | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | If set, then take the inverse of the operator. 'in' becomes 'not in'.                                                  | false                                                                                                                  |