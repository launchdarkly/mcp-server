# PostAIConfigVariationRequest

## Example Usage

```typescript
import { PostAIConfigVariationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PostAIConfigVariationRequest = {
  ldAPIVersion: "beta",
  projectKey: "<value>",
  configKey: "<value>",
  aiConfigVariationPost: {
    key: "key",
    messages: [
      {
        content: "content",
        role: "role",
      },
      {
        content: "content",
        role: "role",
      },
    ],
    model: {},
    name: "name",
    modelConfigKey: "modelConfigKey",
    comment: "comment",
  },
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   | Example                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                                                                                                                                | [operations.PostAIConfigVariationLDAPIVersion](../../models/operations/postaiconfigvariationldapiversion.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                                                            | Version of the endpoint.                                                                                                                                                                                      |                                                                                                                                                                                                               |
| `projectKey`                                                                                                                                                                                                  | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | N/A                                                                                                                                                                                                           |                                                                                                                                                                                                               |
| `configKey`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | N/A                                                                                                                                                                                                           |                                                                                                                                                                                                               |
| `aiConfigVariationPost`                                                                                                                                                                                       | [components.AIConfigVariationPost](../../models/components/aiconfigvariationpost.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                            | AI Config variation object to create                                                                                                                                                                          | {<br/>"name": "name",<br/>"messages": [<br/>{<br/>"role": "role",<br/>"content": "content"<br/>},<br/>{<br/>"role": "role",<br/>"content": "content"<br/>}<br/>],<br/>"model": "{}",<br/>"comment": "comment",<br/>"modelConfigKey": "modelConfigKey",<br/>"key": "key"<br/>} |