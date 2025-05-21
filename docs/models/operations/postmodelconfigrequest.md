# PostModelConfigRequest

## Example Usage

```typescript
import { PostModelConfigRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostModelConfigRequest = {
  ldAPIVersion: "beta",
  projectKey: "default",
  modelConfigPost: {
    name: "name",
    key: "key",
    id: "id",
    icon: "icon",
    provider: "provider",
    params: {},
    customParams: {},
    tags: [
      "tags",
      "tags",
    ],
    costPerInputToken: 0.8008281904610115,
    costPerOutputToken: 6.027456183070403,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                                                                                                                                                           | [operations.PostModelConfigLDAPIVersion](../../models/operations/postmodelconfigldapiversion.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                       | Version of the endpoint.                                                                                                                                                                                                                 |                                                                                                                                                                                                                                          |
| `projectKey`                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      | default                                                                                                                                                                                                                                  |
| `modelConfigPost`                                                                                                                                                                                                                        | [models.ModelConfigPost](../../models/modelconfigpost.md)                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                       | AI model config object to create                                                                                                                                                                                                         | {<br/>"costPerOutputToken": 6.027456183070403,<br/>"costPerInputToken": 0.8008281904610115,<br/>"provider": "provider",<br/>"customParams": "{}",<br/>"name": "name",<br/>"icon": "icon",<br/>"id": "id",<br/>"params": "{}",<br/>"key": "key",<br/>"tags": [<br/>"tags",<br/>"tags"<br/>]<br/>} |