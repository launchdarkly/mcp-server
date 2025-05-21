# PostAIConfigRequest

## Example Usage

```typescript
import { PostAIConfigRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostAIConfigRequest = {
  ldAPIVersion: "beta",
  projectKey: "<value>",
  aiConfigPost: {
    key: "key",
    maintainerId: "maintainerId",
    maintainerTeamKey: "maintainerTeamKey",
    name: "name",
    tags: [
      "tags",
      "tags",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               | Example                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                                                                            | [operations.PostAIConfigLDAPIVersion](../../models/operations/postaiconfigldapiversion.md)                                                                | :heavy_check_mark:                                                                                                                                        | Version of the endpoint.                                                                                                                                  |                                                                                                                                                           |
| `projectKey`                                                                                                                                              | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |                                                                                                                                                           |
| `aiConfigPost`                                                                                                                                            | [models.AIConfigPost](../../models/aiconfigpost.md)                                                                                                       | :heavy_check_mark:                                                                                                                                        | AI Config object to create                                                                                                                                | {<br/>"maintainerId": "maintainerId",<br/>"maintainerTeamKey": "maintainerTeamKey",<br/>"name": "name",<br/>"description": "",<br/>"key": "key",<br/>"tags": [<br/>"tags",<br/>"tags"<br/>]<br/>} |