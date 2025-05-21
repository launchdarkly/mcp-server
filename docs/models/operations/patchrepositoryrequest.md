# PatchRepositoryRequest

## Example Usage

```typescript
import { PatchRepositoryRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchRepositoryRequest = {
  repo: "<value>",
  requestBody: [
    {
      op: "replace",
      path: "/exampleField",
      value: "new example value",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `repo`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The repository name                                                      |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |