# PatchCustomRoleRequest

## Example Usage

```typescript
import { PatchCustomRoleRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchCustomRoleRequest = {
  customRoleKey: "<value>",
  patchWithComment: {
    patch: [
      {
        op: "replace",
        path: "/exampleField",
        value: "new example value",
      },
    ],
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `customRoleKey`                                             | *string*                                                    | :heavy_check_mark:                                          | The custom role key                                         |
| `patchWithComment`                                          | [models.PatchWithComment](../../models/patchwithcomment.md) | :heavy_check_mark:                                          | N/A                                                         |