# UpdateFlagLinkRequest

## Example Usage

```typescript
import { UpdateFlagLinkRequest } from "@launchdarkly/mcp-server/models/operations";

let value: UpdateFlagLinkRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
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
| `featureFlagKey`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | The feature flag key                                                     |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The flag link ID                                                         |
| `requestBody`                                                            | [components.PatchOperation](../../models/components/patchoperation.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |