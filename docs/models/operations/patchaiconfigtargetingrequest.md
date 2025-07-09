# PatchAIConfigTargetingRequest

## Example Usage

```typescript
import { PatchAIConfigTargetingRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchAIConfigTargetingRequest = {
  ldAPIVersion: "beta",
  projectKey: "<value>",
  configKey: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `ldAPIVersion`                                                                                                 | [operations.PatchAIConfigTargetingLDAPIVersion](../../models/operations/patchaiconfigtargetingldapiversion.md) | :heavy_check_mark:                                                                                             | Version of the endpoint.                                                                                       |                                                                                                                |
| `projectKey`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `configKey`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `aiConfigTargetingPatch`                                                                                       | [components.AIConfigTargetingPatch](../../models/components/aiconfigtargetingpatch.md)                         | :heavy_minus_sign:                                                                                             | AI Config targeting semantic patch instructions                                                                | {<br/>"instructions": [<br/>{<br/>"key": ""<br/>},<br/>{<br/>"key": ""<br/>}<br/>],<br/>"comment": "comment",<br/>"environmentKey": "environmentKey"<br/>} |