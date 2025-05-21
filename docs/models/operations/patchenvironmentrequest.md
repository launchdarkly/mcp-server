# PatchEnvironmentRequest

## Example Usage

```typescript
import { PatchEnvironmentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchEnvironmentRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
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
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |