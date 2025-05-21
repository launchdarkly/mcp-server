# PatchFlagDefaultsByProjectRequest

## Example Usage

```typescript
import { PatchFlagDefaultsByProjectRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchFlagDefaultsByProjectRequest = {
  projectKey: "<value>",
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
| `projectKey`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | The project key                                                          |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |