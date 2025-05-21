# PatchFeatureFlagRequest

## Example Usage

```typescript
import { PatchFeatureFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PatchFeatureFlagRequest = {
  projectKey: "<value>",
  featureFlagKey: "<value>",
  patchWithComment: {
    patch: [
      {
        op: "replace",
        path: "/exampleField",
        value: "new example value",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `projectKey`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The project key                                                                                              |
| `featureFlagKey`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The feature flag key. The key identifies the flag in your code.                                              |
| `ignoreConflicts`                                                                                            | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | If true, the patch will be applied even if it causes a pending scheduled change or approval request to fail. |
| `patchWithComment`                                                                                           | [components.PatchWithComment](../../models/components/patchwithcomment.md)                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |