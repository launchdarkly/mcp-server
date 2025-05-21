# PatchFlagImportConfigurationRequest

## Example Usage

```typescript
import { PatchFlagImportConfigurationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchFlagImportConfigurationRequest = {
  projectKey: "<value>",
  integrationKey: "<value>",
  integrationId: "<value>",
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
| `integrationKey`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | The integration key                                                      |
| `integrationId`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | The integration ID                                                       |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |