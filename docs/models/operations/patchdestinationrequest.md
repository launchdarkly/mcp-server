# PatchDestinationRequest

## Example Usage

```typescript
import { PatchDestinationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchDestinationRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  id: "<value>",
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
| `environmentKey`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | The environment key                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The Data Export destination ID                                           |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |