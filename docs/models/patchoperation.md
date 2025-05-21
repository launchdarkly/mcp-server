# PatchOperation

## Example Usage

```typescript
import { PatchOperation } from "@launchdarkly/mcp-server";

let value: PatchOperation = {
  op: "replace",
  path: "/exampleField",
  value: "new example value",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `op`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | The type of operation to perform                                        | replace                                                                 |
| `path`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | A JSON Pointer string specifying the part of the document to operate on | /exampleField                                                           |
| `value`                                                                 | *any*                                                                   | :heavy_minus_sign:                                                      | A JSON value used in "add", "replace", and "test" operations            | new example value                                                       |