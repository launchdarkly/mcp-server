# ListModelConfigsRequest

## Example Usage

```typescript
import { ListModelConfigsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: ListModelConfigsRequest = {
  ldAPIVersion: "beta",
  projectKey: "default",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                     | [operations.ListModelConfigsLDAPIVersion](../../models/operations/listmodelconfigsldapiversion.md) | :heavy_check_mark:                                                                                 | Version of the endpoint.                                                                           |                                                                                                    |
| `projectKey`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | default                                                                                            |
| `restricted`                                                                                       | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether to return only restricted models                                                           |                                                                                                    |