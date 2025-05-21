# PostRestrictedModelsRequest

## Example Usage

```typescript
import { PostRestrictedModelsRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostRestrictedModelsRequest = {
  ldAPIVersion: "beta",
  projectKey: "default",
  restrictedModelsRequest: {
    keys: [
      "keys",
      "keys",
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                             | [operations.PostRestrictedModelsLDAPIVersion](../../models/operations/postrestrictedmodelsldapiversion.md) | :heavy_check_mark:                                                                                         | Version of the endpoint.                                                                                   |                                                                                                            |
| `projectKey`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | default                                                                                                    |
| `restrictedModelsRequest`                                                                                  | [components.RestrictedModelsRequest](../../models/components/restrictedmodelsrequest.md)                   | :heavy_check_mark:                                                                                         | List of AI model keys to add to the restricted list.                                                       | {<br/>"keys": [<br/>"keys",<br/>"keys"<br/>]<br/>}                                                         |