# PatchRelayAutoConfigRequest

## Example Usage

```typescript
import { PatchRelayAutoConfigRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchRelayAutoConfigRequest = {
  id: "<value>",
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The relay auto config id                                                   |
| `patchWithComment`                                                         | [components.PatchWithComment](../../models/components/patchwithcomment.md) | :heavy_check_mark:                                                         | N/A                                                                        |